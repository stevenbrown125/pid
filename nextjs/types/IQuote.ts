import IProduct from "./IProduct";

export default interface IQuote {
  name: string;
  company: string;
  phone: string | undefined;
  email: string;
  timetable: string;
  applications: string;
  comments: string;
  product: IProduct | null;
  city: string;
  state: string;
  country: string;
  hasConsented: boolean;
  refId?: string;
}

export interface IQuoteErrors {
  name?: string | null;
  company?: string | null;
  phone?: string | null;
  email?: string | null;
  timetable?: string | null;
  applications?: string | null;
  comments?: string | null;
  product?: string | null;
  city?: string | null;
  state?: string | null;
  country?: string | null;
  hasConsented?: string | null;
  extra?: string | null;
}
