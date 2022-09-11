import '../styles/globals.css'
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3'
import type { AppProps } from 'next/app'
import { PortableTextComponentsProvider } from '@portabletext/react'
import Seo from '../components/SEO'

const components = {
  list: {
    // Ex. 1: customizing common list types
    bullet: ({ children }: any) => (
      <ul className="py-2 ml-6 list-disc mt-xl">{children}</ul>
    ),
    number: ({ children }: any) => (
      <ol className="list-disc mt-lg">{children}</ol>
    ),

    // Ex. 2: rendering custom lists
    checkmarks: ({ children }: any) => (
      <ol className="m-auto text-lg">{children}</ol>
    )
  },
  listItem: {
    // Ex. 1: customizing common list types
    bullet: ({ children }: any) => <li className="py-2">{children}</li>,

    // Ex. 2: rendering custom list items
    checkmarks: ({ children }: any) => <li>✅ {children}</li>
  },
  marks: {
    // Ex. 1: custom renderer for the em / italics decorator
    em: ({ children }: any) => <em className="text-gray-600">{children}</em>,
    sub: ({ children }: any) => <sub>{children}</sub>,
    sup: ({ children }: any) => <sup>{children}</sup>,
    // Ex. 2: rendering a custom `link` annotation
    link: ({ value, children }: any) => {
      const target = (value?.href || '').startsWith('http')
        ? '_blank'
        : undefined
      return (
        <a
          className="text-primary hover:text-primary-dark"
          href={value?.href}
          target={target}
          rel={target === '_blank' ? 'noindex nofollow' : ''}
        >
          {children}
        </a>
      )
    }
  }
}

//TODO: Disable Captcha if did not accept cookies
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <GoogleReCaptchaProvider
      reCaptchaKey={
        process.env.GOOG_CAPTCHA_SITE_KEY ||
        '6LdW6eIhAAAAAJ2kH_5Gkz-6RFMyC6SESfuK9zcW'
      }
      scriptProps={{
        async: false,
        defer: false,
        appendTo: 'head',
        nonce: undefined
      }}
    >
      <PortableTextComponentsProvider components={components}>
        <Seo />
        <Component {...pageProps} />
      </PortableTextComponentsProvider>
    </GoogleReCaptchaProvider>
  )
}

export default MyApp
