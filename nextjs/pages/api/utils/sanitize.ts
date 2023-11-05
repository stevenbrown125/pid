import sanitizeHtml from "sanitize-html";
import { BasicRequestBody } from "../../../lib/types/common";

export function sanitizeFields<T extends BasicRequestBody>(
  input: T,
  fieldsToSanitize: (keyof T)[]
): T {
  return Object.keys(input).reduce((acc, key) => {
    const value = input[key];
    if (fieldsToSanitize.includes(key as keyof T)) {
      acc[key as keyof T] =
        typeof value === "string" ? sanitizeHtml(value) : value;
    } else {
      acc[key as keyof T] = value;
    }
    return acc;
  }, {} as T);
}

export const sanitizeInput = (body: BasicRequestBody) => {
  const fieldsToSanitize = Object.keys(body) as (keyof typeof body)[];
  return sanitizeFields(body, fieldsToSanitize);
};
