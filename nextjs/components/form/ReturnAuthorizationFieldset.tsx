import ToggleField from "./fields/ToggleField";
import IRMA, { IRMAErrors } from "../../lib/types/IRMA";
import { ActionKind } from "../../lib/types/IAction";
import TextAreaField from "./fields/TextAreaField";
import InputField from "./fields/InputField";

interface ReturnAuthorizationFieldsetProps {
  rma: IRMA;
  errors: IRMAErrors;
  setRMA: Function;
  handleInput: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
}

const ReturnAuthorizationFieldset: React.FC<
  ReturnAuthorizationFieldsetProps
> = ({ rma, errors, handleInput, setRMA }) => {
  const handleToggle = (key: string, value: boolean) => {
    console.log(value);
    console.log(rma);
    setRMA({
      type: ActionKind.HandleInput,
      field: key,
      payload: value,
    });
  };

  const handleToggleResult = (key: string, value: boolean) => {
    if (!value)
      setRMA({
        type: ActionKind.HandleInput,
        field: key,
        payload: "",
      });
  };

  return (
    <fieldset className="grid items-center grid-cols-2 col-span-2 ">
      <legend>Equipment Details</legend>

      <ToggleField
        isChecked={rma.ownEquipment}
        onToggle={(e: boolean) => handleToggle("ownEquipment", e)}
        id="ownEquipment"
        name="ownEquipment"
        description="Do you own this equipment?"
      />
      <InputField
        id="whoOwnsEquipment"
        label="If no, who does this equipment belong to?"
        placeholder=""
        required={!rma.ownEquipment}
        value={!rma.ownEquipment ? rma.whoOwnsEquipment : ""}
        onChange={handleInput}
        disabled={rma.ownEquipment}
        errors={errors.ownEquipment}
      />

      <ToggleField
        isChecked={rma.communicatedWithUs}
        onToggle={(isChecked: boolean) => {
          handleToggle("communicatedWithUs", isChecked);
          handleToggleResult("whoWorkingWith", isChecked);
        }}
        id="communicatedWithUs"
        name="communicatedWithUs"
        description="Have you communicated this return with us?"
      />

      <InputField
        id="whoWorkingWith"
        label="If yes, who are you working with at PID?"
        placeholder=""
        required={rma.communicatedWithUs}
        value={rma.communicatedWithUs ? rma.whoWorkingWith : ""}
        onChange={handleInput}
        disabled={!rma.communicatedWithUs}
        errors={errors.communicatedWithUs}
      />

      <div className="grid grid-cols-1 col-span-2 gap-y-2">
        <TextAreaField
          id="reasonForReturn"
          label="Briefly explain the reason for return"
          onChange={handleInput}
          value={rma.reasonForReturn}
          errors={errors.reasonForReturn}
          required={true}
        />
        <InputField
          id="turnaroundTime"
          placeholder="6-8 weeks"
          value={rma.turnaroundTime}
          onChange={handleInput}
          errors={errors.turnaroundTime}
          label={<>Please indicate how fast a turnaround you need.</>}
          required={true}
        />
        <TextAreaField
          id="holdingAccessories"
          label="Please let us know if you are holding back any accessories ie) battery charger, etc."
          onChange={handleInput}
          value={rma.holdingAccessories}
          errors={errors.holdingAccessories}
        />
        <TextAreaField
          id="otherComments"
          label="Is there anything else that you'd like us to know about this equipment?"
          onChange={handleInput}
          value={rma.otherComments}
          errors={errors.otherComments}
        />
      </div>
    </fieldset>
  );
};

export default ReturnAuthorizationFieldset;
