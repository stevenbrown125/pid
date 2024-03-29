import { useState } from "react";
import { FaBars, FaPhoneAlt, FaSearch } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import MobileNavigation from "./MobileNavigation";
import SearchContainer from "./SearchContainer";

const navigation = [
  { name: "Products", href: "/products" },
  { name: "Service", href: "/service" },
  { name: "Company", href: "/company" },
  { name: "Contact", href: "/contact" },
];

const Header = (): JSX.Element => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <header className="fixed top-0 z-30 w-screen bg-gradient-to-t from-[#FFFFFF] via-[#FFFFFF] to-red-50">
      {/* Mobile menu */}
      <MobileNavigation
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
        navigation={navigation}
      />
      {/* Top */}
      <div className="relative px-5 py-1 mx-auto sm:grid sm:grid-cols-3 justify-items-center max-w-7xl">
        <a
          href="tel:1-774-413-5281"
          className="items-center hidden pr-2 text-xs font-bold text-neutral-800 md:flex md:pr-5 justify-self-start"
        >
          <FaPhoneAlt className="w-4 h-3 mr-1" />
          +1 (774) 413-5281
        </a>
        <div className="flex items-center justify-center col-start-2 md:col-start-auto">
          <Image
            src="/images/hnu.png"
            alt="HNU Logo"
            height={20}
            width={45}
            className="w-auto h-auto"
          />

          <p className="pt-1 pl-2 text-xs font-semibold tracking-widest text-center uppercase text-neutral-800 md:font-extrabold lg:flex-none">
            Home of the HNU
          </p>
        </div>
      </div>

      {/* Navigation */}
      <nav
        aria-label="Navigation"
        className="z-10 w-full p-2 bg-white shadow-sm lg:px-4"
      >
        {/* Container */}
        <div className="flex items-center mx-auto sm:py-2 max-w-7xl">
          {/* Logo (lg+) */}
          <div className="hidden -m-2 md:flex lg:items-center">
            <Link href="/" className="px-4 mr-4">
              <span className="sr-only">PID Analyzers</span>
              <Image
                className="flex-shrink-0 mx-2"
                src="/images/pid-logo.png"
                alt="PID Analyzers"
                height={227}
                width={472}
              />
            </Link>
          </div>

          {/* Navigation (md+) */}
          <div className="container relative hidden md:flex justify-items-stretch">
            <div className="pt-2 md:space-x-8 lg:ml-10 lg:space-x-10">
              {navigation.map((item) => (
                <Link
                  key={`nav-${item.name}`}
                  href={item.href}
                  className="font-semibold text-md text-neutral-700 xl:text-xl hover:text-red-600"
                >
                  {item.name}
                </Link>
              ))}
            </div>
            <div className="pt-2 pl-8 lg:pl-10 shrink-0">
              <Link
                href="/request-a-quote"
                className="font-semibold text-red-600 text-md hover:text-red-800 xl:text-xl"
              >
                Request a Quote
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
          <div className="flex justify-center w-full -pl-4">
            <Link href="/">
              <button type="button" className="mt-1 md:hidden">
                <span className="sr-only">PID Analyzers</span>
                <Image
                  className="flex-shrink-0 w-auto h-auto"
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
                searchOpen ? "text-red-500" : "text-neutral-700"
              } md:flex items-center text-lg font-medium pt-2 hover:text-red-500 hidden `}
              onClick={() => {
                setSearchOpen(!searchOpen);
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
  );
};

export default Header;
