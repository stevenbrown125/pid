import React, { useState } from 'react'
import { RegionDropdown } from 'react-country-region-selector'
import { GrMapLocation } from 'react-icons/gr'
import { ActionKind } from '../../types/IAction'

export default function RegionField({ quote, errors, setQuote }: any) {
  const [selectRegion, setSelectedRegion] = useState(quote.state)
  const region = selectRegion

  const handleInput = (val: string) => {
    setQuote({
      type: ActionKind.HandleInput,
      field: 'state',
      payload: val
    })
    setSelectedRegion(val)
  }

  return (
    <label htmlFor="state" className="relative block my-4">
      <span className="flex items-center ">
        <GrMapLocation className="w-5 mx-1" />
        State / Province
      </span>
      <RegionDropdown
        country={quote.country}
        value={region}
        onChange={(val) => handleInput(val)}
        name="state"
        classes="block w-full px-4 py-3 mt-2 rounded-md shadow-sm focus:ring-red-600 focus:border-white border-neutral-300"
      />
      {errors && (
        <span className="absolute pl-1 text-red-600 -bottom-6">{errors}</span>
      )}
    </label>
  )
}
