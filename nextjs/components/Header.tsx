import { useState } from 'react'
import { FaBars, FaPhoneAlt, FaSearch, FaShoppingCart } from 'react-icons/fa'
import Link from 'next/link'
import Image from 'next/image'
import MobileNavigation from './MobileNavigation'
import SearchContainer from './SearchContainer'

const navigation = [
  { name: 'Products', href: '/products' },
  { name: 'Service', href: '/service' },
  { name: 'Company', href: '/company' },
  { name: 'Contact', href: '/contact' }
]

const Header = (): JSX.Element => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)

  return (
    <header className="fixed top-0 z-20 min-w-full border-b border-neutral-100 bg-neutral-100">
      {/* Mobile menu */}
      <MobileNavigation
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
        navigation={navigation}
      />
      {/* Top */}
      <div className="relative px-5 py-1 mx-auto border-b sm:grid sm:grid-cols-3 justify-items-center max-w-7xl border-neutral-300">
        <a
          href="tel:1-774-413-5281"
          className="items-center hidden pr-2 text-xs font-bold md:flex md:pr-5 justify-self-start text-neutral-600"
        >
          <FaPhoneAlt className="w-4 h-3 mr-1 " />
          +1 (774) 413-5281
        </a>
        <div className="flex items-center justify-center col-start-2 md:col-start-auto">
          <Link href="/">
            <span className="">
              <Image
                className="w-8 h-4"
                src="/images/hnu.png"
                alt="HNU Logo"
                height={20}
                width={45}
              />
            </span>
          </Link>
          <p className="pl-2 text-xs font-bold tracking-wider text-center uppercase md:font-extrabold text-neutral-600 md:pt-1 lg:flex-none">
            Home of the HNU
          </p>
        </div>
      </div>

      {/* Navigation */}
      <nav
        aria-label="Navigation"
        className="z-10 w-full p-2 shadow-md bg-neutral-50 lg:px-4"
      >
        {/* Container */}
        <div className="flex items-center mx-auto max-w-7xl">
          {/* Logo (lg+) */}
          <div className="hidden -m-2 md:flex lg:items-center">
            <Link href="/">
              <a className="px-4 py-4 mr-4 bg-neutral-50 ">
                <span className="sr-only">PID Analyzers</span>
                <Image
                  className="flex-shrink-0 block w-32 h-auto mx-2 "
                  src="/images/pid-logo.png"
                  alt="PID Analyzers"
                  height={178}
                  width={344}
                />
              </a>
            </Link>
          </div>

          {/* Navigation (md+) */}
          <div className="container relative hidden md:flex justify-items-stretch">
            <div className="pt-2 md:space-x-8 lg:ml-10 lg:space-x-10">
              {navigation.map((item) => (
                <Link key={`nav-${item.name}`} href={item.href}>
                  <a className="font-medium text-md text-neutral-700 xl:text-xl hover:text-red-600">
                    {item.name}
                  </a>
                </Link>
              ))}
            </div>
            <div className="pt-2 pl-8 lg:pl-10 shrink-0">
              <Link href="/request-a-quote">
                <a className="font-medium text-red-600 text-md hover:text-red-800 xl:text-xl ">
                  Request a Quote
                </a>
              </Link>
            </div>
          </div>

          {/* Mobile menu and search (lg-) */}
          <div className="flex items-center flex-1 pl-2 md:hidden ">
            <button
              type="button"
              className="p-2 -ml-2 text-black rounded-md "
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open menu</span>
              <FaBars className="w-6 h-6" aria-hidden="true" />
            </button>
          </div>

          {/* Logo (lg-) */}
          <div className="flex justify-center w-full ">
            <Link href="/">
              <button type="button" className="mt-1 md:hidden">
                <span className="sr-only">PID Analyzers</span>
                <Image
                  className="flex-shrink-0 block mx-2"
                  src="/images/pid-logo.png"
                  alt="PID Analyzers"
                  height={58}
                  width={118}
                />
              </button>
            </Link>
          </div>

          {/* Search Button */}
          <div className="flex items-center justify-end pr-2 text-xl md:pr-6">
            <button
              type="button"
              className={`${
                searchOpen ? 'text-red-500' : 'text-neutral-700'
              } md:flex items-center text-lg font-medium pt-2 hover:text-red-500 hidden `}
              onClick={() => {
                setSearchOpen(!searchOpen)
              }}
            >
              <FaSearch className="w-6 h-6 mr-2" />
              <span className="sr-only lg:not-sr-only">Search</span>
            </button>
          </div>
          {/* End Container */}
        </div>
      </nav>
      <SearchContainer show={searchOpen} setSearchOpen={setSearchOpen} />
    </header>
  )
}

export default Header
