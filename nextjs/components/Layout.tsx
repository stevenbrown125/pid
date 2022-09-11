import Footer from './Footer'
import Head from 'next/head'
import Link from 'next/link'
import Header from './Header'

export default function Layout({ children }: any): JSX.Element {
  return (
    <>
      <Head>
        <title>PID Analyzers, LLC - Home of the HNU</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <main className="relative pt-2 mt-28 ">{children}</main>

      <Footer setOpen={false} />
    </>
  )
}
