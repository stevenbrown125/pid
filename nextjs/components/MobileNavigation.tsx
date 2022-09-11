import React, { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import Link from 'next/link'
import Image from 'next/image'
import { GrClose } from 'react-icons/gr'

const MobileNavigation = ({
  mobileMenuOpen,
  setMobileMenuOpen,
  navigation
}: any) => {
  return (
    <Transition.Root show={mobileMenuOpen} as={Fragment}>
      <Dialog
        as="div"
        className="fixed inset-0 z-40 flex lg:hidden"
        onClose={setMobileMenuOpen}
      >
        <Transition.Child
          as={Fragment}
          enter="transition-opacity ease-linear duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity ease-linear duration-300"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <Transition.Child
          as={Fragment}
          enter="transition ease-in-out duration-300 transform"
          enterFrom="-translate-x-full"
          enterTo="translate-x-0"
          leave="transition ease-in-out duration-300 transform"
          leaveFrom="translate-x-0"
          leaveTo="-translate-x-full"
        >
          <div className="relative flex flex-col w-4/5 max-w-xs pb-12 overflow-y-auto shadow-xl bg-neutral-50">
            <div className="relative flex items-center justify-between px-4 pt-4 pb-3">
              <Link href="/">
                <button onClick={() => setMobileMenuOpen(false)} type="button">
                  <Image
                    className="block w-32 h-auto mx-2"
                    src="/images/logo.png"
                    alt="PID Analyzers"
                    width={122}
                    height={56}
                  />
                </button>
              </Link>
              <button
                type="button"
                className="inline-flex items-center justify-center p-2 -m-2 text-black rounded-md hover:text-red-700 focus:outline-none "
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <GrClose className="w-6 h-6" aria-hidden="true" />
              </button>
            </div>

            {/* Navigation Links */}
            <div className="px-4 py-4 space-y-4 border-t border-primary-dark">
              {navigation.map((page: any) => (
                <div key={page.name} className="flow-root">
                  <Link href={page.href}>
                    <button
                      onClick={() => setMobileMenuOpen(false)}
                      type="button"
                      className="block px-2 text-lg text-neutral-700 hover:text-primary"
                    >
                      {page.name}
                    </button>
                  </Link>
                </div>
              ))}

              <Link href="/request-a-quote" className="block">
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  type="button"
                  className="px-2 text-lg text-red-700 hover:text-red-600"
                >
                  Request a Quote
                </button>
              </Link>
            </div>
          </div>
        </Transition.Child>
      </Dialog>
    </Transition.Root>
  )
}

export default MobileNavigation
