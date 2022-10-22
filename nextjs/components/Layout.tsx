import Footer from './Footer'
import Header from './Header'

export default function Layout({ children }: any): JSX.Element {
  return (
    <div className="flex flex-col justify-between h-screen">
      <Header />
      <main className="relative mt-28 ">{children}</main>

      <Footer setOpen={false} />
    </div>
  )
}
