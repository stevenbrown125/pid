import "../styles/globals.css";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";
import type { AppProps } from "next/app";
import Seo from "../components/SEO";

//TODO: Disable Captcha if did not accept cookies
function MyApp({ Component, pageProps }: AppProps) {
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
      <Seo />
      <Component {...pageProps} />
    </GoogleReCaptchaProvider>
  );
}

export default MyApp;
