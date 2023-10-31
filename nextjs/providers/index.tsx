import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";
import { ModalProvider } from "./ModalProvider";

export default function Providers({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <GoogleReCaptchaProvider
      reCaptchaKey={
        process.env.GOOG_CAPTCHA_SITE_KEY ||
        "6LdW6eIhAAAAAJ2kH_5Gkz-6RFMyC6SESfuK9zcW"
      }
      scriptProps={{
        async: false,
        defer: false,
        appendTo: "head",
        nonce: undefined,
      }}
    >
      <ModalProvider>{children}</ModalProvider>
    </GoogleReCaptchaProvider>
  );
}
