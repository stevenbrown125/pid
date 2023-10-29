import { IAddress } from "../types/common";

export const formatAddress = (address: IAddress): string => {
  const { street, city, state, country } = address;
  return `${street}\n${city}, ${state}\n${country}`;
};
