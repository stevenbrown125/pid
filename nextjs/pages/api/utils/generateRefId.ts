import { randomUUID } from "crypto";

export function generateRefId(name?: string) {
  const date = new Date();

  const fallbackName = () => randomUUID().replace(/-/g, "").slice(0, 3);

  const validName = name && name.length >= 3 ? name : fallbackName();

  const refId = `${randomUUID().slice(0, 5)}-${validName.slice(
    0,
    3
  )}-${date.getFullYear()}`;
  return refId;
}
