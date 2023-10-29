import { IAddress, IAddressErrors } from "./common";

export default interface IRMA {
  name: string;
  company: string;
  phone: string | undefined;
  email: string;
  applications: string;
  comments: string;
  product: string;
  billingAddress: IAddress;
  shippingAddress: IAddress;
  hasConsented: boolean;
  refId?: string;
  ownEquipment: boolean;
  whoOwnsEquipment: string;
  communicatedWithUs: boolean;
  whoWorkingWith: string;
  reasonForReturn: string;
  turnaroundTime: string;
  holdingAccessories: string;
  otherComments: string;
}
export interface IRMAErrors {
  name?: string | null | undefined;
  company?: string | null | undefined;
  phone?: string | null | undefined;
  email?: string | null | undefined;
  applications?: string | null | undefined;
  comments?: string | null | undefined;
  product?: string | null | undefined;
  billingAddress?: IAddressErrors;
  shippingAddress?: IAddressErrors;
  hasConsented?: string | null | undefined;
  refId?: string | null | undefined;
  ownEquipment?: string | null | undefined;
  whoOwnsEquipment?: string | null | undefined;
  communicatedWithUs?: string | null | undefined;
  whoWorkingWith?: string | null | undefined;
  reasonForReturn?: string | null | undefined;
  turnaroundTime?: string | null | undefined;
  holdingAccessories?: string | null | undefined;
  otherComments?: string | null | undefined;
}
