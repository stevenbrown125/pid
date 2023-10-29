import { IAction } from "../types/IAction";
import IContact from "../types/IContact";
import initialContactState from "../initialState/contact";

export const ContactReducer = (state: IContact, action: IAction): IContact => {
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
        ...initialContactState,
      };
    default:
      return state;
  }
};
