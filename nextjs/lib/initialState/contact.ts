import IContact from "../types/IContact";

const initialContactState: IContact = {
  name: "",
  phone: "",
  email: "",
  message: "",
  hasConsented: false,
};

export default initialContactState;
