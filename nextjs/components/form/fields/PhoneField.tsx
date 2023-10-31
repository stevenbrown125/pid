import { FaPhone } from "react-icons/fa";
import PhoneInput from "react-phone-number-input/input";
import { E164Number } from "libphonenumber-js/types";

interface PhoneInputFieldProps {
  value: E164Number | undefined;
  onChange: (value: E164Number | undefined) => void;
  errors: { phone?: string | undefined | null };
}

const PhoneField: React.FC<PhoneInputFieldProps> = ({
  value,
  onChange,
  errors,
}) => {
  return (
    <div>
      <label htmlFor="phone">
        <FaPhone className="w-5 mx-1" />
        Phone
      </label>
      <PhoneInput
        type="tel"
        name="phone"
        placeholder="+1 000 000 0000"
        id="phone"
        value={value}
        onChange={onChange}
        maxLength={17}
        autoComplete="tel"
        className="block w-full px-4 py-3 mt-2 rounded-md shadow-sm focus:ring-red-600 focus:border-white border-neutral-300"
        required
      />
      {errors.phone && (
        <span className="absolute pl-1 text-red-600 -bottom-6">
          {errors.phone}
        </span>
      )}
    </div>
  );
};

export default PhoneField;
