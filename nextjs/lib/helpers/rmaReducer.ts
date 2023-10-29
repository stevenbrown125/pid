import { IAction } from "../types/IAction";
import IRMA from "../types/IRMA";
import initialRMAState from "../initialState/rma";

export const RMAReducer = (state: IRMA, action: IAction): IRMA => {
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
        ...initialRMAState,
      };
    default:
      return state;
  }
};
