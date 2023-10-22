import { useReducer, useState } from "react";
import {
  FaArrowsAltV,
  FaBuilding,
  FaCheck,
  FaCity,
  FaEnvelope,
  FaPhone,
  FaUser,
} from "react-icons/fa";
import { Listbox, Switch, Transition } from "@headlessui/react";
import CountryField from "../components/quote/CountryField";
import RegionField from "../components/quote/RegionField";
import Link from "next/link";
import client from "../client";
import { allProductQuery } from "../lib/sanity/allProductQuery";
import { initialQuoteState, QuoteReducer } from "../lib/helpers/quoteReducer";
import { IQuoteErrors } from "../types/IQuote";
import { NextPage } from "next";
import Layout from "../components/Layout";
import IProduct from "../types/IProduct";
import validateQuote from "../lib/helpers/validator";
import PhoneInput from "react-phone-number-input/input";
import { formatPhoneNumber } from "react-phone-number-input";
import { E164Number } from "libphonenumber-js/types";
import { ActionKind } from "../types/IAction";
import Modal from "../components/Modal";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import { useRouter } from "next/router";
import Seo from "../components/SEO";

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(" ");
}

export async function getStaticProps() {
  const products = await client.fetch(allProductQuery);
  return {
    props: {
      products,
    },
  };
}

const RequestAQuotePage: NextPage = ({ products }: any) => {
  // Initialize Captcha
  const { executeRecaptcha } = useGoogleReCaptcha();

  /* Sets up timetable so users have to select atleast 30 days from now */
  const today = new Date();
  today.setDate(today.getDate() + 30);
  const timeTableMin = today.toISOString().slice(0, 10);

  /* Handle the Quote State */
  const [quote, setQuote] = useReducer(QuoteReducer, initialQuoteState);
  const [errors, setErrors] = useState({} as IQuoteErrors);
  const [isLoading, setIsLoading] = useState(false);
  //TODO: Refactor State into Reducer for  Modal
  const [open, setOpen] = useState(false); // Modal State
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);

  // Submit to API
  const submitQuoteForm = async (gReCaptchaToken: string) => {
    const res = await fetch("/api/quote", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...quote,
        gRecaptchaToken: gReCaptchaToken,
      }),
    });

    const data = await res.json();

    if (data.$metadata.httpStatusCode === 200) {
      setMessage(
        "Your quotation request sent successfully. Our team will get back to you within 1 business day."
      );
      setSuccess(true);
      setOpen(true);
      setQuote({ type: ActionKind.Reset });
    } else {
      setMessage(
        "Your quotation request failed to send due to a server error. Please email us at support@hnu.com with your Quotation Request."
      );
      setSuccess(false);
      setOpen(true);
    }
    setIsLoading(false);
    return data;
  };
  // Handlers
  const handleInput = (e: React.SyntheticEvent) => {
    const target = e.target as typeof e.target & {
      name: string;
      value: string;
    };
    setQuote({
      type: ActionKind.HandleInput,
      field: target.name,
      payload: target.value,
    });
  };

  const handlePhone = (e: E164Number | undefined) => {
    if (e === undefined) return;
    setQuote({
      type: ActionKind.HandleInput,
      field: "phone",
      payload: e,
    });
  };

  /* Handle Submit */
  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    setIsLoading(true);
    const phone = quote.phone;
    try {
      /* Validate Client Side */
      const submissionErrors = validateQuote(quote);
      setErrors(submissionErrors);
      if (Object.keys(submissionErrors).length > 0) throw "Validation Error";

      /* Fixes E164Number toString issue */
      setQuote({
        type: ActionKind.HandleInput,
        field: "phone",
        payload: formatPhoneNumber(quote.phone || ""),
      });

      /* No Errors, so send to API and clear any errors */
      if (!executeRecaptcha) throw "Execute recaptcha not yet available";

      // Wrap submission with Recaptcha
      const gReCaptchaToken = await executeRecaptcha("contactFormSubmit");

      const submissionResponse = await submitQuoteForm(gReCaptchaToken);

      /* Return the Phone number back to E164Number, unless it is already reset*/
      if (submissionResponse.$metadata.httpStatusCode !== 200) {
        setQuote({
          type: ActionKind.HandleInput,
          field: "phone",
          payload: phone,
        });
      }
    } catch (e: any) {
      setQuote({
        type: ActionKind.HandleInput,
        field: "phone",
        payload: phone,
      });

      setIsLoading(false);
    }
  };

  /* Handle Initial Product Selection */
  const router = useRouter();
  const { slug } = router.query;
  let selectedProduct = products.find((product: any) => product.slug === slug);
  if (selectedProduct === undefined)
    selectedProduct = { title: "No product Selected" };

  return (
    <Layout>
      <Seo
        title="Request a Quote"
        description="Interested in purchasing one of our products? Please fill in the details below so that we can get in contact with you."
      />

      <Modal
        open={open}
        setOpen={setOpen}
        message={message}
        success={success}
      />
      <section className="relative px-4 pt-6 pb-12 mx-auto sm:px-12 lg:px-16 lg:max-w-7xl">
        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 lg:gap-x-12 lg:gap-y-8 gap-x-4 gap-y-4"
        >
          {/* Contact Information */}
          <div className="text-base md:col-span-2">
            <h2 className="font-semibold leading-6 tracking-wide text-red-600 uppercase">
              Contact Us
            </h2>
            <h3 className="text-3xl font-extrabold leading-8 tracking-tight text-stone-800 sm:text-4xl">
              Request a Quote
            </h3>
          </div>
          <label htmlFor="firstName" className="relative block w-full">
            <span className="flex items-center">
              <FaUser className="w-5 mx-1" />
              Full Name
            </span>
            <input
              type="text"
              name="name"
              id="name"
              autoComplete="given-name"
              placeholder="John Doe"
              value={quote.name}
              onChange={(e) => handleInput(e)}
              className="block w-full px-4 py-3 mt-2 rounded-md shadow-sm focus:ring-red-600 focus:border-white border-neutral-300"
            />
            {errors.name && (
              <span className="absolute pl-1 text-red-600 -bottom-6">
                {errors.name}
              </span>
            )}
          </label>
          <label htmlFor="phone" className="relative block">
            <span className="flex items-center">
              <FaPhone className="w-5 mx-1" />
              Phone
            </span>
            <PhoneInput
              type="tel"
              name="phone"
              placeholder="+1 000 000 0000"
              id="phone"
              value={quote.phone}
              onChange={(e) => handlePhone(e)}
              maxLength={17}
              autoComplete="tel"
              className="block w-full px-4 py-3 mt-2 rounded-md shadow-sm focus:ring-red-600 focus:border-white border-neutral-300"
              required
            />
            {errors.phone && (
              <span className="absolute pl-1 text-red-600 -bottom-6">
                {errors.phone}
              </span>
            )}
          </label>
          <label htmlFor="email" className="relative block">
            <span className="flex items-center">
              <FaEnvelope className="w-5 mx-1" />
              Email
            </span>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="johndoe@email.com"
              value={quote.email}
              onChange={(e) => handleInput(e)}
              autoComplete="email"
              className="block w-full px-4 py-3 mt-2 rounded-md shadow-sm focus:ring-red-600 focus:border-white border-neutral-300"
            />
            {errors.email && (
              <span className="absolute pl-1 text-red-600 -bottom-6">
                {errors.email}
              </span>
            )}
          </label>

          <label htmlFor="company" className="relative block">
            <span
              id="company-optional"
              className="absolute right-0 text-sm text-right text-neutral-500"
            >
              Optional
            </span>
            <span className="flex items-center">
              <FaBuilding className="w-5 mx-1" />
              Company
            </span>
            <input
              type="text"
              name="company"
              id="company"
              value={quote.company}
              onChange={(e) => handleInput(e)}
              className="block w-full px-4 py-3 mt-2 rounded-md shadow-sm focus:ring-red-600 focus:border-white border-neutral-300"
              aria-describedby="company-optional"
            />
          </label>

          <div className="grid grid-cols-1 md:grid-cols-3 md:col-span-2 gap-x-5 ">
            <CountryField
              quote={quote}
              setQuote={setQuote}
              errors={errors.country}
            />
            <RegionField
              quote={quote}
              setQuote={setQuote}
              errors={errors.state}
            />

            <label htmlFor="city" className="relative block">
              <span className="flex items-center">
                <FaCity className="w-5 mx-1" />
                City
              </span>
              <input
                type="text"
                name="city"
                id="city"
                value={quote.city}
                onChange={(e) => handleInput(e)}
                className="block w-full px-4 py-3 mt-2 rounded-md shadow-sm focus:ring-red-600 focus:border-white border-neutral-300"
              />
              {errors.city && (
                <span className="absolute pl-1 text-red-600 -bottom-6">
                  {errors.city}
                </span>
              )}
            </label>
          </div>

          {/* Product Information */}
          <h2 className="pt-4 pb-1 text-2xl font-extrabold text-center border-b text-neutral-800 md:col-span-2 md:text-left sm:text-3xl lg:text-4xl filter drop-shadow-sm">
            Product Info
          </h2>
          <div className="relative z-10 block md:col-span-2">
            <Listbox
              value={selectedProduct}
              onChange={(e: IProduct) =>
                setQuote({
                  type: ActionKind.HandleInput,
                  field: "product",
                  payload: e,
                })
              }
              name="product"
            >
              <Listbox.Label className="block">Analyzer</Listbox.Label>
              <Listbox.Button className="relative w-full py-3 pl-3 pr-10 mt-2 text-left bg-white border rounded-md shadow-sm cursor-default focus:ring-red-600 border-neutral-300 focus:outline-none focus:ring-1 focus:border-red-600 sm:text-sm">
                <span className="block truncate">
                  {quote.product ? quote.product.title : selectedProduct.title}
                </span>
                <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                  <FaArrowsAltV
                    className="w-5 h-5 text-gray-400"
                    aria-hidden="true"
                  />
                </span>
              </Listbox.Button>
              <Transition
                enter="transition duration-100 ease-out"
                enterFrom="transform scale-95 opacity-0"
                enterTo="transform scale-100 opacity-100"
                leave="transition duration-75 ease-out"
                leaveFrom="transform scale-100 opacity-100"
                leaveTo="transform scale-95 opacity-0"
              >
                <Listbox.Options className="absolute z-20 w-full py-1 mt-1 overflow-auto text-left bg-white rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                  {products.map((product: IProduct) => (
                    <Listbox.Option
                      key={`${product.id}-${product.title}`}
                      className={({ active }) =>
                        classNames(
                          active ? "text-white bg-red-600" : "text-gray-900",
                          "cursor-default select-none relative py-2 pl-8 pr-4"
                        )
                      }
                      value={product}
                    >
                      {({ selected, active }) => (
                        <>
                          <span
                            className={classNames(
                              selected ? "font-semibold" : "font-normal",
                              "block truncate"
                            )}
                          >
                            {product.title}
                          </span>
                          {selected ? (
                            <span
                              className={classNames(
                                active ? "text-white" : "text-red-600",
                                "absolute inset-y-0 left-0 flex items-center  pl-1.5"
                              )}
                            >
                              <FaCheck
                                className="w-3 h-3 ml-1"
                                aria-hidden="true"
                              />
                            </span>
                          ) : null}
                        </>
                      )}
                    </Listbox.Option>
                  ))}
                </Listbox.Options>
              </Transition>
            </Listbox>{" "}
            {errors.product && (
              <span className="float-left pl-1 text-red-600 ">
                {errors.product}
              </span>
            )}
          </div>
          <label htmlFor="timetable" className="relative block">
            Purchase Timetable
            <input
              type="date"
              min={timeTableMin}
              name="timetable"
              id="timetable"
              value={quote.timetable}
              onChange={(e) => handleInput(e)}
              className="block w-full px-4 py-3 mt-2 rounded-md shadow-sm focus:ring-red-600 focus:border-white border-neutral-300"
            />{" "}
            {errors.timetable && (
              <span className="absolute pl-1 text-red-600 -bottom-6 ">
                {errors.timetable}
              </span>
            )}
          </label>
          <label htmlFor="application">
            <div className="flex justify-between">
              Applications
              <span
                id="application-optional"
                className="w-full text-sm text-right text-neutral-500"
              >
                Optional
              </span>
            </div>
            <input
              type="text"
              name="applications"
              id="applications"
              value={quote.applications}
              onChange={(e) => handleInput(e)}
              className="block w-full px-4 py-3 mt-2 rounded-md shadow-sm focus:ring-red-600 focus:border-white border-neutral-300"
            />
          </label>
          <label htmlFor="comments" className="relative block md:col-span-2">
            Comments
            <textarea
              rows={4}
              name="comments"
              id="comments"
              onChange={(e) => handleInput(e)}
              value={quote.comments}
              className="block w-full px-4 py-3 mt-2 rounded-md shadow-sm focus:ring-red-600 focus:border-white border-neutral-300"
            />
            {errors.comments && (
              <span className="absolute pl-1 text-red-600 -bottom-6 ">
                {errors.comments}
              </span>
            )}
          </label>
          <div className="hidden">
            <label htmlFor="field">
              Don&apos;t fill this out if you&apos;re human:
              <input name="field" />
            </label>
          </div>
          <div className=" md:col-span-2">
            <label
              htmlFor="privacy"
              className="relative flex pb-6 font-medium text-gray-700"
            >
              <p className="order-2 pl-2 text-sm font-normal text-gray-500">
                By checking this box you acknowledge that you have read and
                accepted our{" "}
                <Link href="/privacy-policy" legacyBehavior>
                  <a
                    className="text-red-600 underline hover:text-red-800"
                    target="_blank"
                  >
                    Privacy Policy
                  </a>
                </Link>
                .
              </p>
              <div className="flex items-center h-5 ml-3">
                <Switch
                  id="privacy"
                  aria-describedby="privacy"
                  name="privacy"
                  checked={quote.hasConsented}
                  onChange={(e: boolean) =>
                    setQuote({
                      type: ActionKind.ToggleConsent,
                      field: "hasConsent",
                      payload: e,
                    })
                  }
                  className={`${
                    quote.hasConsented ? "bg-red-600" : "bg-gray-200"
                  } relative inline-flex h-6 w-11 items-center rounded-full`}
                >
                  <span className="sr-only">Toggle Consent</span>
                  <span
                    className={`${
                      quote.hasConsented ? "translate-x-6" : "translate-x-1"
                    } inline-block h-4 w-4 transform rounded-full bg-white`}
                  />
                </Switch>
              </div>
              {errors.hasConsented && (
                <span className="absolute pl-1 text-red-600 -bottom-3">
                  {errors.hasConsented}
                </span>
              )}
            </label>

            <div
              className="pl-2 my-6 g-recaptcha"
              data-sitekey="6LcMc2AfAAAAAGAm9zAtZW_dPuQFaHF7eqvVsOqV"
            />
            {Object.keys(errors).length > 0 && (
              <span className="block w-full pb-4 pl-1 font-bold text-red-600 md:col-span-2">
                There are errors in the form. Please correct any errors before
                attempting to submit again.
              </span>
            )}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full px-10 py-4 text-base font-medium text-white bg-red-700 border border-transparent rounded-md shadow-sm md:ml-2 hover:bg-red-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-600 sm:w-auto"
            >
              Submit
            </button>
          </div>
        </form>
      </section>
    </Layout>
  );
};
export default RequestAQuotePage;
