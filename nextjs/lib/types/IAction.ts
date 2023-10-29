import IProduct from "./IProduct";
import { IAddress } from "./common";

export type IAction = {
  type: ActionKind;
  payload?: string | number | boolean | IProduct | IAddress;
  field?: any;
};

export const enum ActionKind {
  HandleInput = "HANDLE_INPUT",
  ToggleConsent = "TOGGLE_CONSENT",
  Reset = "RESET",
}
