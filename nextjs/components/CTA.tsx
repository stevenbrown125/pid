import Link from "next/link";
import { FaBook, FaEnvelope, FaPencilAlt } from "react-icons/fa";

export default function CTA() {
  return (
    <section className="relative font-medium bg-red-800 shadow-md">
      <div className="relative grid grid-cols-1 mx-auto text-xl text-white lg:text-2xl xl:text-4xl md:grid-cols-3 max-w-7xl">
        <div className="p-4 hover:opacity-75">
          <Link href="/products" className="flex p-4">
            <div className="flex items-center justify-center p-4 mr-2 border-2 border-red-900 rounded-full">
              <FaBook className="w-10 text-white xl:w-12" />
            </div>
            <div className="flex items-center">
              <p className="">
                <span className="block text-base xl:text-xl ">View our</span>
                Products
              </p>
            </div>
          </Link>
        </div>
        <div className="relative z-20 p-4 bg-red-700 shadow-sm hover:opacity-75">
          <Link href="/contact" className="flex p-4">
            <div className="flex items-center justify-center p-4 mr-2 border-2 border-red-800 rounded-full">
              <FaEnvelope className="w-10 text-white xl:w-12" />
            </div>
            <div className="flex items-center">
              <p className="">
                <span className="block text-base xl:text-xl ">
                  Have a question?
                </span>
                Contact Us
              </p>
            </div>
          </Link>
        </div>
        <div className="p-4 hover:opacity-75">
          <Link href="/request-a-quote" className="flex p-4">
            <div className="flex items-center p-4 mr-2 border-2 border-red-900 rounded-full ">
              <FaPencilAlt className="w-10 text-white xl:w-12" />
            </div>
            <div className="flex items-center">
              <p className="">
                <span className="block text-base xl:text-xl md:hidden lg:block ">
                  Ready to get started?
                </span>
                Request Quote
              </p>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
