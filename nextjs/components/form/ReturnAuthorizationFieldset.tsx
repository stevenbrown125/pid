import ToggleField from "./ToggleField";
import IRMA, { IRMAErrors } from "../../lib/types/IRMA";
import { ActionKind } from "../../lib/types/IAction";

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
  return (
    <fieldset className="grid items-center grid-cols-2 col-span-2 ">
      <legend>Return Authorization</legend>

      <ToggleField
        isChecked={rma.ownEquipment}
        onToggle={(e: boolean) => handleToggle("ownEquipment", e)}
        id="ownEquipment"
        name="ownEquipment"
        description="Do you own this equipment?"
      />

      <div>
        <input
          type="text"
          name="whoOwnsEquipment"
          placeholder="If no, who does this equipment belong to?"
          value={rma.whoOwnsEquipment || ""}
          onChange={handleInput}
          disabled={!rma.ownEquipment}
        />
        {errors.ownEquipment && (
          <span className="text-red-600">{errors.whoOwnsEquipment}</span>
        )}
      </div>

      <ToggleField
        isChecked={rma.communicatedWithUs}
        onToggle={(isChecked: boolean) =>
          handleToggle("communicatedWithUs", isChecked)
        }
        id="communicatedWithUs"
        name="communicatedWithUs"
        description="Have you communicated this return with us?"
      />

      <input
        type="text"
        name="whoWorkingWith"
        placeholder="If yes, who are you working with at PID?"
        value={rma.whoWorkingWith || ""}
        onChange={handleInput}
        disabled={!rma.communicatedWithUs}
      />
      {errors.communicatedWithUs && (
        <span className="text-red-600">{errors.communicatedWithUs}</span>
      )}
    </fieldset>
  );
};

export default ReturnAuthorizationFieldset;
