import IRMA from "../types/IRMA";
import initialAddressState from "./address";

const initialRMAState: IRMA = {
  name: "",
  company: "",
  phone: undefined,
  email: "",
  billingAddress: initialAddressState,
  shippingAddress: initialAddressState,
  hasConsented: false,
  ownEquipment: false,
  whoOwnsEquipment: "",
  communicatedWithUs: false,
  whoWorkingWith: "",
  reasonForReturn: "",
  turnaroundTime: "",
  holdingAccessories: "",
  otherComments: "",
};

export default initialRMAState;
