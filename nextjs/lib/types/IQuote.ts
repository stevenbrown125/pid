import IProduct from "./IProduct";
import { BasicRequestBody, BasicRequestBodyErrors } from "./common";

export default interface IQuote extends BasicRequestBody {
  company: string;
  timetable: string;
  applications: string;
  comments: string;
  product: IProduct | null;
  city: string;
  state: string;
  country: string;
  refId?: string;
}

export interface IQuoteErrors extends BasicRequestBodyErrors {
  company?: string | null;
  timetable?: string | null;
  applications?: string | null;
  comments?: string | null;
  product?: string | null;
  city?: string | null;
  state?: string | null;
  country?: string | null;
  extra?: string | null;
}
