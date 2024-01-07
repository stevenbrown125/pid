import { CountryDropdown } from "react-country-region-selector";
import { FaGlobeAmericas } from "react-icons/fa";
import { ActionKind } from "../../../lib/types/IAction";

export default function CountryField({ form, errors, setQuote }: any) {
  const handleInput = (val: string) => {
    setQuote({
      type: ActionKind.HandleInput,
      field: "country",
      payload: val,
    });
  };

  return (
    <div className="col-span-2 md:col-span-1">
      <label htmlFor="country">
        <FaGlobeAmericas />
        Country
      </label>
      <CountryDropdown
        classes="customField"
        value={form.country}
        name="country"
        onChange={(val) => handleInput(val)}
      />
      {errors && <span>{errors}</span>}
    </div>
  );
}
