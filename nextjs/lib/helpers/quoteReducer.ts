import { IAction } from "../types/IAction";
import IQuote from "../types/IQuote";
import initialQuoteState from "../initialState/quote";

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
