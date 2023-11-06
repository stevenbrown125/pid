import isEmail from "validator/lib/isEmail";
import { isPossiblePhoneNumber } from "react-phone-number-input";
import { BasicRequestBody } from "../../../lib/types/common";

export const validateInput = (body: BasicRequestBody) => {
  const { email, phone, hasConsented } = body;

  if (hasConsented === false) {
    return {
      isValid: false,
      error: "User has not consented to our Privacy Policy.",
    };
  }

  if (!email || !isEmail(email)) {
    return { isValid: false, error: "Invalid email address" };
  }

  if (phone && !isPossiblePhoneNumber(phone)) {
    return { isValid: false, error: "Invalid phone number" };
  }

  return { isValid: true };
};
