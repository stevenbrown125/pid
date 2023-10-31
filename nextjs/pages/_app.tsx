import "../styles/globals.css";
import type { AppProps } from "next/app";
import Seo from "../components/SEO";
import Providers from "../providers";

//TODO: Disable Captcha if did not accept cookies
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Providers>
      <Seo />

      <Component {...pageProps} />
    </Providers>
  );
}

export default MyApp;
