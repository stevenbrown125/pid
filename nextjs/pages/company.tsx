import { NextPage } from "next";
import Image from "next/legacy/image";
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
      <section className="relative px-4 py-6 pb-10 mx-auto sm:px-12 lg:px-16 lg:max-w-7xl ">
        <div className="text-base">
          <h2 className="font-semibold leading-6 tracking-wide text-red-600 uppercase">
            About Us
          </h2>
          <h3 className="text-3xl font-extrabold leading-8 tracking-tight text-stone-800 sm:text-4xl">
            Home of the HNU
          </h3>
        </div>
        <div className="w-full px-4 prose prose-lg lg:grid lg:grid-cols-2 lg:gap-6 md:max-w-none">
          <div className="prose-lg text-gray-500 lg:max-w-none">
            <p>
              PID Analyzers, LLC was formed in April 2003 to acquire the assets
              of HNU Systems. Inc. (developer of the first commercial
              photoionization instrumentation).
            </p>
            <p className="mt-4">
              More than 40,000 systems had been sold worldwide between
              1973-2003. We still service many of the older instruments such as
              the PI101, DL101, IS101, PI51, PI51…
            </p>
            <p className="mt-4">
              Our first goal was to develop multifunctional microprocessor based
              electronics that could be used with virtually any sensor
              technology for monitoring chemicals. This would be used to expand
              HNU&rsquo;s pioneering photoionization technology that was
              acquired. A second goal was to develop new and/or improved sensors
              that could be incorporated into our analyzers. We have achieved
              these goals with the introduction of the Model 102+. The amp board
              in this analyzer has 5 amplifiers in a compact board.
            </p>
          </div>
          <div className="mt-6 prose-lg text-gray-500 lg:mt-0">
            <p>
              These can be used to process high impedence voltage (microvolts)
              or currrent (nanoamps), a Wheatstone bridge for combustible gas,
              capacitance, thermal conductivity, or infrared (microbolometer)
              sensors, and electrochemical sensors (fuel cell, unbiased and
              biased).
            </p>
            <p className="mt-4">
              PID Analyzers develops sensors and systems for air, water and
              process monitoring using technologies such as : photoionization,
              flame ionization, thermal conductivity, flame photometry, infrared
              &amp; UV absorption, electrochemistry, capacitance, gas
              chromatography. Descriptions of our instrumentation are shown on
              our web site on our product page at:{" "}
              <Link href="/products" legacyBehavior>
                <a className="text-red-600 hover:text-stone-800">here</a>
              </Link>
              .
            </p>
            <p className="mt-4">
              All of our analyzers have proprietary software (operating systems)
              from the microcontrollers in the Model 102 to the 32 bit C++
              software in our embedded software for the Model 301C (PeakWorks™)
              that runs on Windows XP.
            </p>
          </div>
        </div>
        <div className="flex justify-center mt-6 md:justify-end md:pr-12">
          <Link href="/request-a-quote" legacyBehavior>
            <a className="flex items-center justify-center px-5 py-3 text-base font-medium text-white bg-red-600 border border-transparent rounded-md shadow-md hover:bg-red-700">
              Request a Quote
            </a>
          </Link>
        </div>
      </section>
      <section className="relative py-12 shadow-inner bg-neutral-100">
        <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:gap-24 lg:items-start">
          <div className="relative sm:py-16 lg:py-0">
            <div className="relative max-w-md px-4 mx-auto sm:max-w-3xl sm:px-6 lg:px-0 lg:max-w-none">
              <div className="relative pb-6 overflow-hidden shadow-xl rounded-2xl h-[560px]">
                <Image
                  className="object-cover w-full h-full"
                  src="https://images.unsplash.com/photo-1508530786855-dfea35260b8d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&fp-x=0.5&fp-y=0.6&fp-z=3&width=1440&height=1440&sat=-80"
                  alt=""
                  layout="fill"
                />
                <div className="absolute inset-0 bg-transparent mix-blend-multiply" />
                <div className="absolute inset-0 bg-gradient-to-t from-red-700 via-transparent opacity-90" />
                <div className="absolute w-full px-8 bottom-4">
                  <blockquote className="flex justify-end sm:items-center sm:justify-between">
                    <div className="relative hidden font-medium text-white sm:block text-md md:flex-grow">
                      <p className="relative">
                        An official supplier to the US Navy since 1982.
                      </p>
                    </div>
                    <div>
                      <Image
                        className="flex-shrink-0 block w-24 h-auto mx-2"
                        src="/images/pid-logo-white.png"
                        alt="Official Supplier to the US Navy"
                        width={80}
                        height={40}
                      />
                    </div>
                  </blockquote>
                </div>
              </div>
            </div>
          </div>

          <div className="relative max-w-md px-4 mx-auto sm:max-w-3xl sm:px-6 lg:px-0">
            {/* Content area */}
            <div className="pt-8">
              <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                On a mission to empower teams
              </h2>
              <div className="mt-6 space-y-6 text-gray-500">
                <p className="text-lg">
                  We have worked with the US Navy since 1982 to provide portable
                  VOC Analyzers (HNU Model 101, spare parts and service. Now we
                  provide the PID Model 102 VOC Analyzers to the Navy Undersea
                  Systems for all submarines in the US fleet.
                </p>
                <p className="text-base leading-7">
                  Our Model 102 has been third party tested and is listed on the
                  National Work Group on Leak detection Evaluations (
                  <a
                    href="http://www.nwglde.org/"
                    target="_blank"
                    rel="noreferrer"
                    className="px-1 text-red-700 hover:underline"
                  >
                    http://www.nwglde.org/
                  </a>
                  )
                </p>
              </div>
            </div>
            <h3 className="mt-10 mb-6 text-3xl font-extrabold tracking-tight text-gray-900">
              Our Expertise
            </h3>

            <ul className="pl-10 text-base text-gray-500 list-disc">
              <li>Sensors</li>
              <li>GC Detectors</li>
              <li>Spectroscopy</li>
              <li>Gas Chromatography</li>
              <li>Software for Systems (C++) for Gas Chromatographs</li>
              <li>Software for Controllers (Microprocessors) and PLCs</li>
            </ul>
          </div>
        </div>
      </section>
      <CTA />
    </Layout>
  );
};

export default CompanyPage;
