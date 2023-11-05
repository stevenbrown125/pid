import type { NextApiRequest, NextApiResponse } from "next";
import { sanitizeInput } from "../utils/sanitize";
import { validateInput } from "../utils/validate";
import { verifyCaptcha } from "../utils/verifyCaptcha";
import { handleRMA } from "../controllers/rmaController";

export default async function rmaRoute(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const { gRecaptchaToken } = req.body;

    if (!gRecaptchaToken) {
      return res.status(400).json({ error: "reCAPTCHA token is missing" });
    }
    const captchaResult = await verifyCaptcha(gRecaptchaToken);

    if (!captchaResult.success) {
      return res.status(400).json({
        error: "Invalid reCAPTCHA token",
        details: captchaResult["error-codes"],
      });
    }

    req.body = sanitizeInput(req.body);

    const validationResult = validateInput(req.body);
    if (!validationResult.isValid) {
      return res.status(400).json({ error: validationResult.error });
    }

    console.log("valid", req);
    return handleRMA(req, res);
  } else {
    // If not a POST request, return a 405 Method Not Allowed error
    res.setHeader("Allow", ["POST"]);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
