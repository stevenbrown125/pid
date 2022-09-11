import IProduct from "./IProduct";

export type IAction = {
  type: ActionKind,
  payload?: string | number | boolean | IProduct,
  field?: any;
}

export const enum ActionKind {
  HandleInput = 'HANDLE_INPUT',
  ToggleConsent ='TOGGLE_CONSENT',
  Reset = 'RESET'
}