import { FaUser, FaEnvelope, FaBuilding } from "react-icons/fa";
import PhoneField from "./fields/PhoneField";
import { E164Number } from "libphonenumber-js/types";
import InputField from "./fields/InputField";

interface CustomerFieldsetProps {
  form: any;
  handleInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handlePhone: (value: E164Number | undefined) => void;
  errors: any;
}

const CustomerFieldset: React.FC<CustomerFieldsetProps> = ({
  form,
  handleInput,
  handlePhone,
  errors,
}) => {
  return (
    <fieldset className="grid grid-cols-1 col-span-2 gap-x-6 gap-y-2 md:grid-cols-2">
      <legend>Customer Infomation</legend>
      <InputField
        id="name"
        label={
          <>
            <FaUser />
            Full Name
          </>
        }
        placeholder="John Doe"
        autoComplete="given-name"
        value={form.name}
        onChange={handleInput}
        errors={errors.name}
        required={true}
      />

      <PhoneField value={form.phone} onChange={handlePhone} errors={errors} />
      <InputField
        id="email"
        label={
          <>
            <FaEnvelope />
            Email
          </>
        }
        placeholder="johndoe@email.com"
        autoComplete="email"
        value={form.email}
        onChange={handleInput}
        errors={errors.email}
        required={true}
      />
      <InputField
        id="company"
        label={
          <>
            <FaBuilding />
            Company
          </>
        }
        placeholder=""
        value={form.company}
        onChange={handleInput}
        errors={errors.company}
      />
    </fieldset>
  );
};

export default CustomerFieldset;
