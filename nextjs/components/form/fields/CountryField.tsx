import { CountryDropdown } from "react-country-region-selector";
import { FaGlobeAmericas } from "react-icons/fa";
import { ActionKind } from "../../../lib/types/IAction";

export default function CountryField({ quote, errors, setQuote }: any) {
  const handleInput = (val: string) => {
    setQuote({
      type: ActionKind.HandleInput,
      field: "country",
      payload: val,
    });
  };

  return (
    <div>
      <label htmlFor="state">
        <FaGlobeAmericas />
        Country
      </label>
      <CountryDropdown
        classes="customField"
        value={quote.country}
        name="country"
        onChange={(val) => handleInput(val)}
      />
      {errors && <span>{errors}</span>}
    </div>
  );
}
