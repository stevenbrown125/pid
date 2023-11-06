import { randomInt, randomUUID } from "crypto";

export function generateRMAId(name?: string) {
  const date = new Date();

  const fallbackName = () => randomUUID().replace(/-/g, "").slice(0, 3);

  const validName = name && name.length >= 3 ? name : fallbackName();

  const refId = `${randomInt(40000, 50000)}-${validName.slice(
    0,
    3
  )}-${date.getFullYear()}`;
  return refId;
}
