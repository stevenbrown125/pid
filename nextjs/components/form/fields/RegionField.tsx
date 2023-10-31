import React, { useState } from "react";
import { RegionDropdown } from "react-country-region-selector";
import { GrMapLocation } from "react-icons/gr";
import { ActionKind } from "../../../lib/types/IAction";

export default function RegionField({ quote, errors, setQuote }: any) {
  const [selectRegion, setSelectedRegion] = useState(quote.state);
  const region = selectRegion;

  const handleInput = (val: string) => {
    setQuote({
      type: ActionKind.HandleInput,
      field: "state",
      payload: val,
    });
    setSelectedRegion(val);
  };

  return (
    <div>
      <label htmlFor="state">
        <GrMapLocation />
        State / Province
      </label>
      <RegionDropdown
        country={quote.country}
        value={region}
        onChange={(val) => handleInput(val)}
        name="state"
        classes="customField"
      />
      {errors && <span>{errors}</span>}
    </div>
  );
}
