import { isPossiblePhoneNumber } from "react-phone-number-input";
import isEmail from "validator/lib/isEmail";
import IContact, { IContactError } from "../types/IContact";
import IQuote, { IQuoteErrors } from "../types/IQuote";
import IRMA, { IRMAErrors } from "../types/IRMA";
import { IAddress, IAddressErrors } from "../types/common";

export default function validateQuote(quote: IQuote) {
  const errors: IQuoteErrors = {};

  if (!quote.name) {
    errors.name = "First name is required";
  }
  if (!isPossiblePhoneNumber(quote.phone || "")) {
    errors.phone = "Phone number is not valid";
  }
  if (!isEmail(quote.email)) {
    errors.email = "Email address is invalid";
  }
  if (!quote.product) {
    errors.product = "Product is required";
  }
  if (!quote.country) {
    errors.country = "Country is required";
  }
  if (!quote.state) {
    errors.state = "State is required";
  }
  if (!quote.city) {
    errors.city = "City is required";
  }
  if (!quote.timetable) {
    errors.timetable = "Purchase Timetable is required";
  }
  if (!quote.comments || quote.comments.length < 25) {
    errors.comments = `Please enter atleast 25 characters describing your desired specifications`;
  }
  if (!quote.hasConsented) {
    errors.hasConsented = "Privacy Policy consent is required.";
  }
  return errors;
}

function validateAddress(address: IAddress, errors: IAddressErrors) {
  const zipRegex = /^(?:[A-Z0-9]+([- ]?[A-Z0-9]+)*)?$/;
  if (!address.country) {
    errors.country = "Country required.";
  }
  if (!address.state) {
    errors.state = "State required.";
  }
  if (!address.city) {
    errors.city = "City required.";
  }
  if (!address.zip) {
    errors.zip = "Zip Code required.";
  } else if (!zipRegex.test(address.zip)) {
    errors.zip = "Zip Code not valid.";
  }
}

export function validateRMA(rma: IRMA) {
  const errors: IRMAErrors = {
    billingAddress: {},
    shippingAddress: {},
  };

  if (!rma.name) {
    errors.name = "First name is required";
  }
  if (!isPossiblePhoneNumber(rma.phone || "")) {
    errors.phone = "Phone number is not valid";
  }
  if (!isEmail(rma.email)) {
    errors.email = "Email address is invalid";
  }
  validateAddress(rma.billingAddress, errors.billingAddress);
  validateAddress(rma.shippingAddress, errors.shippingAddress);
  if (!rma.hasConsented) {
    errors.hasConsented = "Privacy Policy consent is required.";
  }
  return errors;
}

export function validateContact(contact: IContact) {
  const errors: IContactError = {};

  if (!contact.name) {
    errors.name = "First name is required";
  }
  if (!isPossiblePhoneNumber(contact.phone || "")) {
    errors.phone = "Phone number is not valid";
  }
  if (!isEmail(contact.email)) {
    errors.email = "Email address is invalid";
  }
  if (!contact.message || contact.message.length < 25) {
    errors.message = `Please enter atleast 25 characters and be detailed in your message.`;
  }
  if (!contact.hasConsented) {
    errors.hasConsented = "Privacy Policy consent is required.";
  }
  return errors;
}
