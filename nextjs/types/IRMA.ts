import IProduct from "./IProduct";
import { IAddress } from "./common";

export default interface IRMA {
  name: string;
  company: string;
  phone: string | undefined;
  email: string;
  applications: string;
  comments: string;
  product: IProduct | null;
  billingAddress: IAddress;
  shippingAddress: IAddress;
  hasConsented: boolean;
  refId?: string;
}

export interface IRMAErrors {
  name?: string | null;
  company?: string | null;
  phone?: string | null;
  email?: string | null;
  applications?: string | null;
  comments?: string | null;
  product?: string | null;
  billingAddress?: string | null;
  shippingAddress?: string | null;
  hasConsented?: string | null;
  extra?: string | null;
}
