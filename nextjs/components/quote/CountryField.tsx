import { CountryDropdown } from 'react-country-region-selector'
import { FaGlobeAmericas } from 'react-icons/fa'
import { ActionKind } from '../../types/IAction'

export default function CountryField({ quote, errors, setQuote }: any) {
  const handleInput = (val: string) => {
    setQuote({
      type: ActionKind.HandleInput,
      field: 'country',
      payload: val
    })
  }

  return (
    <label htmlFor="state" className="relative block">
      <span className="flex items-center ">
        <FaGlobeAmericas className="w-5 mx-1" />
        Country
      </span>
      <CountryDropdown
        classes="block w-full px-4 py-3 mt-2 rounded-md shadow-sm focus:ring-red-600 focus:border-white border-neutral-300"
        value={quote.country}
        name="country"
        onChange={(val) => handleInput(val)}
      />
      {errors && (
        <span className="absolute pl-1 text-red-600 -bottom-6">{errors}</span>
      )}
    </label>
  )
}
