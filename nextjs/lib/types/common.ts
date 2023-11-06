export interface IAddress {
  street: string;
  city: string;
  state: string;
  country: string;
  zip: string;
}

export interface IAddressErrors {
  street?: string | null;
  city?: string | null;
  state?: string | null;
  country?: string | null;
  zip?: string | null;
}

/* Api */
export interface BasicRequestBody {
  name: string;
  phone: string;
  email: string;
  hasConsented: boolean;
  [key: string]: any;
}

export interface BasicRequestBodyErrors {
  name?: string | null;
  phone?: string | null;
  email?: string | null;
  hasConsented?: string | null;
}
