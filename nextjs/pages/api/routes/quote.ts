import type { NextApiRequest, NextApiResponse } from "next";
import { handleQuote } from "../controllers/quoteController";
import { sanitizeInput } from "../utils/sanitize";
import { validateInput } from "../utils/validate";

export default async function quoteRoute(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    req.body = sanitizeInput(req.body);

    const validationResult = validateInput(req.body);
    if (!validationResult.isValid) {
      return res.status(400).json({ error: validationResult.error });
    }

    return handleQuote(req, res);
  } else {
    // If not a POST request, return a 405 Method Not Allowed error
    res.setHeader("Allow", ["POST"]);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
