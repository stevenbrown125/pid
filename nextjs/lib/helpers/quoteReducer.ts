import { IAction } from "../../types/IAction";
import IQuote from "../../types/IQuote";

/* Exports */

export const initialQuoteState: IQuote = {
  name: "",
  company: "",
  phone: undefined,
  email: "",
  timetable: new Date(new Date().setMonth(new Date().getMonth() + 1))
    .toISOString()
    .slice(0, 10),
  applications: "",
  comments: "",
  product: null,
  city: "",
  state: "",
  country: "",
  hasConsented: false,
};

export const QuoteReducer = (state: IQuote, action: IAction): IQuote => {
  switch (action.type) {
    case "HANDLE_INPUT":
      return {
        ...state,
        [action.field]: action.payload,
      };
    case "TOGGLE_CONSENT":
      return {
        ...state,
        hasConsented: !state.hasConsented,
      };
    case "RESET":
      return {
        ...initialQuoteState,
      };
    default:
      return state;
  }
};
