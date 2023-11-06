import { CountryDropdown, RegionDropdown } from "react-country-region-selector";
import { FaCity, FaGlobeAmericas, FaMailBulk } from "react-icons/fa";
import { GrMapLocation } from "react-icons/gr";
import { FaLocationDot } from "react-icons/fa6";
import { IAddress, IAddressErrors } from "../../lib/types/common";
import { InputField } from "./fields";

interface Props {
  address: IAddress;
  onChange: (updatedAddress: IAddress) => void;
  errors?: IAddressErrors;
  title?: string;
  disabled?: boolean;
  hidden?: boolean;
}

const AddressFieldset: React.FC<Props> = ({
  address,
  onChange,
  errors,
  title = "Address",
  disabled = false,
  hidden = false,
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const updatedAddress = {
      ...address,
      [name]: value,
    };
    onChange(updatedAddress);
  };

  const handleAddressChange = (field: string, val: string) => {
    const updatedAddress = { ...address, [field]: val };
    onChange(updatedAddress);
  };

  return (
    <fieldset
      className={`grid grid-cols-1 md:grid-cols-4 col-span-2 gap-x-6 gap-y-6  ${
        hidden && "hidden"
      }`}
    >
      <legend>{title}</legend>
      <div className="md:col-span-4">
        <InputField
          id="street"
          label={
            <>
              <FaLocationDot />
              Street
            </>
          }
          placeholder=""
          value={address.street}
          onChange={handleChange}
          errors={errors?.street}
          disabled={disabled}
          required={true}
        />
      </div>
      <div>
        <label htmlFor="country" className="flex items-center ">
          <FaGlobeAmericas />
          Country
        </label>
        <CountryDropdown
          classes="block w-full px-4 py-3 mt-2 rounded-md shadow-sm focus:ring-red-600 focus:border-white border-neutral-300"
          value={address.country}
          name="country"
          disabled={disabled}
          onChange={(val) => handleAddressChange("country", val)}
        />
        {errors?.country && <span>{errors?.country}</span>}
      </div>
      <div>
        <label htmlFor="state" className="flex items-center ">
          <GrMapLocation />
          State / Province
        </label>
        <RegionDropdown
          country={address.country}
          value={address.state}
          onChange={(val) => handleAddressChange("state", val)}
          name="state"
          disabled={disabled}
          classes="block w-full px-4 py-3 mt-2 rounded-md shadow-sm focus:ring-red-600 focus:border-white border-neutral-300"
        />
        {errors?.state && <span>{errors?.state}</span>}
      </div>
      <InputField
        id="city"
        label={
          <>
            <FaCity /> City
          </>
        }
        placeholder=""
        value={address.city || ""}
        onChange={handleChange}
        errors={errors?.city}
        required={true}
      />
      <InputField
        id="zip"
        label={
          <>
            <FaMailBulk /> Zip Code
          </>
        }
        placeholder=""
        value={address.zip}
        onChange={handleChange}
        errors={errors?.zip}
        required={true}
      />
    </fieldset>
  );
};

export default AddressFieldset;
