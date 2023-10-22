import { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import CTA from "../components/CTA";
import Layout from "../components/Layout";
import Seo from "../components/SEO";

const CompanyPage: NextPage = () => {
  return (
    <Layout>
      <Seo
        title="About Us"
        description="PID Analyzers, LLC was formed in April 2003 to acquire the
                assets of HNU Systems. Inc. (developer of the first commercial
                photoionization instrumentation)."
      />
      <section className="pb-10 mx-auto relativepy-6 lg:max-w-7xl ">
        <div className="w-full px-4 lg:grid lg:grid-cols-2 lg:gap-6 md:max-w-none">
          <div className="relative overflow-hidden shadow-md rounded-2xl h-[700px]">
            <Image
              className="object-contain object-top w-full h-full m-0 rounded-2xl"
              src="/images/static/pid-baton-rouge-flyer-2023.png"
              alt=""
              fill
            />
          </div>
          <div>
            <h2 className="pt-8 font-semibold leading-6 tracking-wide text-red-600 uppercase">
              About Us
            </h2>
            <h3 className="text-3xl font-extrabold leading-8 tracking-tight text-stone-800 sm:text-4xl">
              Home of the HNU
            </h3>
            <div className="px-4 pt-8 prose prose-lg text-gray-500 lg:mt-0 ">
              <p>
                PID Analyzers develops sensors and systems for air, water and
                process monitoring using technologies such as : photoionization,
                flame ionization, thermal conductivity, flame photometry,
                infrared & UV absorption, electrochemistry, capacitance, gas
                chromatography.
              </p>
              <p className="mt-4">
                Descriptions of our instrumentation are shown on our
                <Link
                  href="/products"
                  className="ml-1 text-red-600 hover:text-stone-800"
                >
                  product page
                </Link>
                .
              </p>
              <div className="flex justify-center mt-6 md:justify-end md:pr-12">
                <Link
                  href="/request-a-quote"
                  className="flex items-center justify-center px-5 py-3 text-base font-medium text-white no-underline bg-red-600 border border-transparent rounded-md shadow-md hover:bg-red-700"
                >
                  Request a Quote
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTA />
    </Layout>
  );
};

export default CompanyPage;
