import { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import { FaFilePdf } from "react-icons/fa";
import Breadcrumbs from "../../components/Breadcrumbs";
import CTA from "../../components/CTA";
import Layout from "../../components/Layout";
import Seo from "../../components/SEO";

const pages = [{ name: "Service", href: "/service", current: true }];

const ServicePage: NextPage = () => {
  return (
    <Layout>
      <Seo
        title="Service"
        description="PID Analyzers, LLC, provides service as well as customer
                    support for hnu, hnu systems, Process Analyzers and PID
                    Analyzers' instruments. If you have service questions,
                    need to calibrate your PIDs, GCs, or get annual maintenance
                    and service contracts you may contact us via E-mail or
                    telephone."
      />
      <section className="relative px-4 py-6 pb-10 mx-auto sm:px-12 lg:px-16 lg:max-w-7xl">
        <div className="grid md:grid-cols-12">
          {/* Service Links */}

          {/* Main Content */}
          <div className="relative pb-6 md:col-span-9 md:bg-white">
            <div className="text-base">
              <h2 className="font-semibold leading-6 tracking-wide text-red-600 uppercase">
                System Service
              </h2>
              <h3 className="text-3xl font-extrabold leading-8 tracking-tight text-stone-800 sm:text-4xl">
                Servicing your PID Analyzer
              </h3>
              <Breadcrumbs pages={pages} />
            </div>
            <div className="px-6 lg:grid lg:grid-cols-1 lg:gap-6">
              <div className="prose prose-lg text-neutral-600 prose-primary lg:max-w-none">
                <figure className="mt-8 mb-4 ml-6 md:float-right">
                  <Image
                    className="object-cover w-64 border shadow-md border-neutral-700"
                    src="/images/dl101field_color_lowres.jpg"
                    alt="PID DL101 Field"
                    width={300}
                    height={382}
                    style={{
                      maxWidth: "100%",
                      height: "auto"
                    }} />
                  <figcaption className="text-xs md:text-right">
                    PID Anaylzer DL101 in Field Enviroment
                  </figcaption>
                </figure>
                <p>
                  PID Analyzers, LLC, provides service as well as customer
                  support for hnu, hnu systems, Process Analyzers and PID
                  Analyzers&rsquo; instruments. If you have service questions,
                  need to calibrate your PIDs, GCs, or get annual maintenance
                  and service contracts you may contact us via E-mail or
                  telephone.
                </p>
                <p className="mt-4">
                  For customers requiring 101/102 service please email:
                  service@hnu.com and we will return your request as soon as
                  possible. Please familiarize yourself with our service links
                  below. Whether you have questions about troubleshooting your
                  101, calibration with an alternate gas, or return
                  authorization, these links should help you find your answer.
                </p>
                <p className="mt-4">
                  If you are sending in your unit for cleaning and calibration,
                  please look at our RA Checklist to make sure that you include
                  all components needed to diagnose and repair your instruments.
                  If you have any questions regarding packaging and shipping
                  address you will find this information there. Likewise, you
                  may fill out our online return authorization form for fastest
                  service.
                </p>
                <p className="mt-4">
                  When we recieve your instrument, we will fax to you a repair
                  estimate. No work will be performed until this repair estimate
                  has been approved by you. If the repair estimate is declined
                  we will charge a one time evaluation fee of $95.
                </p>
                <p className="mt-4">
                  For information regarding service for your HNU, contact the
                  service department at{" "}
                  <a
                    href="mailto:service@hnu.com"
                    className="text-red-600 no-underline hover:underline"
                  >
                    service@hnu.com
                  </a>
                  .
                </p>
              </div>
            </div>
            <div className="flex justify-center mt-8 mr-4 md:justify-end">
              <Link href="/contact" legacyBehavior>
                <a className="flex items-center justify-center px-5 py-3 text-base font-medium text-white bg-red-600 border border-transparent rounded-md hover:bg-red-900">
                  Contact Us
                </a>
              </Link>
            </div>
          </div>
          <div className="relative pb-6 md:-mr-4 md:border-l md:pl-4 md:order-2 md:col-span-3 md:py-6 border-neutral-100">
            <blockquote className="w-full py-4 -mx-2 text-lg font-bold text-center text-red-700 break-normal border-y md:border-t-0 md:pt-0 border-neutral-100">
              DO NOT SEND YOUR CALIBRATION GAS TO PID ANALYZERS, LLC. UNDECLARED
              HAZARDOUS MATERIALS WILL RESULT IN FINES FROM THE DEPARTMENT OF
              TRANSPORTATION.
            </blockquote>
            <h3 className="py-2 font-semibold leading-6 tracking-wide uppercase text-neutral-700">
              Service Links
            </h3>
            <ul className="pl-2">
              <li className="py-2">
                <a
                  target="_blank"
                  href="https://cdn.sanity.io/files/bg59ms84/production/5d9a6905fd197a21dd209dd42d421388514697b3.pdf"
                  className="flex items-center text-red-600 cursor-pointer hover:underline"
                  rel="noreferrer"
                >
                  <FaFilePdf className="pr-1" />
                  Chart of Relative Sensitivities (IP)
                </a>
              </li>
              <li className="py-2">
                <a
                  href="https://cdn.sanity.io/files/bg59ms84/production/146436b92b81091eb891d3ae50b48a42a2210e24.pdf"
                  target="_blank"
                  className="flex items-center text-red-600 cursor-pointer hover:underline"
                  rel="noreferrer"
                >
                  <FaFilePdf className="pr-1" /> Material Safety Data Sheet
                </a>
              </li>
              <li className="py-2">
                <a
                  href="#"
                  className="text-red-600 cursor-pointer hover:underline"
                >
                  PID Clean and Calibration Service
                </a>
              </li>
              <li className="py-2">
                <a
                  href="#"
                  className="text-red-600 cursor-pointer hover:underline"
                >
                  Online Return Authorization
                </a>
              </li>

              <li className="py-2">
                <a
                  href="#"
                  className="text-red-600 cursor-pointer hover:underline"
                >
                  Return Authorization Checklist
                </a>
              </li>
              <li className="py-2">
                <Link href="/service/model-101-faqs" legacyBehavior>
                  <a className="text-red-600 cursor-pointer hover:underline">
                    Model 101 FAQs
                  </a>
                </Link>
              </li>
              <li className="py-2">
                <Link href="/service/calibration-alt-gas" legacyBehavior>
                  <a className="text-red-600 cursor-pointer hover:underline">
                    Calibration with an Alternate Gas
                  </a>
                </Link>
              </li>
              <li className="py-2">
                <Link href="/service/calibration-gas-humidifier" legacyBehavior>
                  <a className="text-red-600 cursor-pointer hover:underline">
                    Calibration Gas Humidifier
                  </a>
                </Link>
              </li>

              <li className="py-2">
                <Link href="/service/lapping-compound-msds" legacyBehavior>
                  <a className="text-red-600 cursor-pointer hover:underline">
                    Lapping (Cleaning) Compound MSDS
                  </a>
                </Link>
              </li>

              <li className="py-2">
                <Link href="/service/troubleshooting-your-101" legacyBehavior>
                  <a className="text-red-600 cursor-pointer hover:underline">
                    Troubleshooting your 101
                  </a>
                </Link>
              </li>

              <li className="py-2">
                <Link
                  href="/service/dl101-win-file-transfer-instructions"
                  legacyBehavior
                >
                  <a className="text-red-600 cursor-pointer hover:underline">
                    DL-101 Win File Transfer Instructions
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section className="relative py-6 shadow-inner md:py-12 bg-neutral-100">
        <div className="grid-cols-12 lg:mx-auto lg:max-w-7xl lg:grid">
          <div className="max-w-full col-span-8 p-8 mr-8 prose prose-lg bg-white shadow-sm">
            <h3 className="mb-6 text-3xl font-extrabold leading-8 tracking-tight text-neutral-700 sm:text-4xl">
              Analyzer Manuals
            </h3>
            <p>
              Manuals for PID Analyzers, LLC, are available for all of our
              instruments for purchase for $50. Please email us at{" "}
              <Link href="/contact" legacyBehavior>
                <a className="text-red-600 no-underline hover:underline">
                  sales@hnu.com
                </a>
              </Link>{" "}
              if you wish to purchase a manual for our instruments.
            </p>
            <p className="mt-4">
              We provide at no charge out quickstart manuals for the Model PI,
              DL, and ISPI 101. These should familiarize yourself with the
              operation of our 101s. For a comphrensive manual, you will need to
              purchase the manual from us.
            </p>
            <p className="mt-4">
              Please note that these are pdf files approximately 2 mbs.
            </p>
          </div>

          <div className="col-span-4 p-8 mt-4 bg-white shadow-sm md:mt-0">
            <h3 className="py-2 font-semibold leading-6 tracking-wide uppercase text-neutral-700">
              Manuals
            </h3>
            <ul className="pl-2">
              <li className="py-2">
                <a
                  href="https://cdn.sanity.io/files/bg59ms84/production/234efc9e27ff5b8d353eb726cb27c76ad8c10e42.pdf"
                  target="_blank"
                  className="flex items-center text-red-600 cursor-pointer hover:underline"
                  rel="noreferrer"
                >
                  <FaFilePdf className="pr-1" />
                  DL-101 Quickstart Manual
                </a>
              </li>
              <li className="py-2">
                <a
                  href="https://cdn.sanity.io/files/bg59ms84/production/85ed258b1a245be3ac3e83b91eb7619e32ca8698.pdf"
                  target="_blank"
                  className="flex items-center text-red-600 cursor-pointer hover:underline"
                  rel="noreferrer"
                >
                  <FaFilePdf className="pr-1" />
                  PI-101 Quickstart Manual
                </a>
              </li>
              <li className="py-2">
                <a
                  href="https://cdn.sanity.io/files/bg59ms84/production/5648d2a88795987eabcc71eed8a5f28881f52043.pdf"
                  target="_blank"
                  className="flex items-center text-red-600 cursor-pointer hover:underline"
                  rel="noreferrer"
                >
                  <FaFilePdf className="pr-1" />
                  ISPI Quickstart Manual
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <CTA />
    </Layout>
  );
};

export default ServicePage;
