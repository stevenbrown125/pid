import IQuote from "../types/IQuote";

const initialQuoteState: IQuote = {
  name: "",
  company: "",
  phone: undefined,
  email: "",
  timetable: new Date(new Date().setMonth(new Date().getMonth() + 1))
    .toISOString()
    .slice(0, 10),
  applications: "",
  comments: "",
  product: null,
  city: "",
  state: "",
  country: "",
  hasConsented: false,
};

export default initialQuoteState;
