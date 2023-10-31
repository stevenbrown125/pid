import { FaUser, FaEnvelope, FaBuilding } from "react-icons/fa";
import PhoneField from "./fields/PhoneField";
import { E164Number } from "libphonenumber-js/types";

interface CustomerFieldsetProps {
  rma: any;
  handleInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handlePhone: (value: E164Number | undefined) => void;
  errors: any;
}

const CustomerFieldset: React.FC<CustomerFieldsetProps> = ({
  rma,
  handleInput,
  handlePhone,
  errors,
}) => {
  return (
    <fieldset className="grid grid-cols-1 col-span-2 gap-x-6 gap-y-2 md:grid-cols-2">
      <legend>Customer Information</legend>
      <div>
        <label htmlFor="firstName">
          <FaUser className="w-5 mx-1" />
          Full Name
        </label>
        <input
          type="text"
          name="name"
          id="name"
          autoComplete="given-name"
          placeholder="John Doe"
          value={rma.name}
          onChange={handleInput}
        />
        {errors.name && <span>{errors.name}</span>}
      </div>

      <PhoneField value={rma.phone} onChange={handlePhone} errors={errors} />

      <div>
        <label htmlFor="email">
          <FaEnvelope />
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          placeholder="johndoe@email.com"
          value={rma.email}
          onChange={handleInput}
          autoComplete="email"
        />
        {errors.email && <span>{errors.email}</span>}
      </div>

      <div>
        <label htmlFor="company">
          <FaBuilding />
          Company
          <span
            id="company-optional"
            className="absolute right-0 text-sm text-right text-neutral-500"
          >
            Optional
          </span>
        </label>
        <input
          type="text"
          name="company"
          id="company"
          value={rma.company}
          onChange={handleInput}
          className="block w-full px-4 py-3 mt-2 rounded-md shadow-sm focus:ring-red-600 focus:border-white border-neutral-300"
          aria-describedby="company-optional"
        />
      </div>
    </fieldset>
  );
};

export default CustomerFieldset;
