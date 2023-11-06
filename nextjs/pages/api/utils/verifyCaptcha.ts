import fetch from "node-fetch";

interface CaptchaVerificationResponse {
  success: boolean;
  challenge_ts?: string;
  hostname?: string;
  "error-codes"?: string[];
}

export async function verifyCaptcha(
  token: string
): Promise<CaptchaVerificationResponse> {
  const secretKey = process.env.GOOG_CAPTCHA_SECRET_KEY;
  const response = await fetch(
    `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${token}`,
    {
      method: "POST",
    }
  );
  const data = (await response.json()) as CaptchaVerificationResponse;
  return data;
}
