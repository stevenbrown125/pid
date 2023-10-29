export interface IAddress {
  street: string;
  city: string;
  state: string;
  country: string;
}

export interface IAddressErrors {
  street?: string | null;
  city?: string | null;
  state?: string | null;
  country?: string | null;
}
