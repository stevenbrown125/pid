import { useContext, useReducer, useState } from "react";
import { FaArrowsAltV, FaCheck, FaCity } from "react-icons/fa";
import { Listbox, Transition } from "@headlessui/react";
import client from "../client";
import { allProductQuery } from "../lib/sanity/allProductQuery";
import { QuoteReducer } from "../lib/helpers/quoteReducer";
import { IQuoteErrors } from "../lib/types/IQuote";
import { NextPage } from "next";
import Layout from "../components/Layout";
import IProduct from "../lib/types/IProduct";
import validateQuote from "../lib/helpers/validator";
import { formatPhoneNumber } from "react-phone-number-input";
import { E164Number } from "libphonenumber-js/types";
import { ActionKind } from "../lib/types/IAction";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import { useRouter } from "next/router";
import Seo from "../components/SEO";
import initialQuoteState from "../lib/initialState/quote";
import { ModalContext } from "../providers/ModalProvider";
import SuccessModal from "../components/modal/SuccessModal";
import ErrorModal from "../components/modal/ErrorModal";
import { CustomerFieldset, PrivacyCheckbox } from "../components/form";
import {
  CountryField,
  HoneypotField,
  InputField,
  RegionField,
  TextAreaField,
} from "../components/form/fields";

export async function getStaticProps() {
  const products = await client.fetch(allProductQuery);
  return {
    props: {
      products,
    },
  };
}

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(" ");
}

const RequestAQuotePage: NextPage = ({ products }: any) => {
  const { executeRecaptcha } = useGoogleReCaptcha();
  const { showModal } = useContext(ModalContext);

  /* Sets up timetable so users have to select atleast 30 days from now */
  const today = new Date();
  today.setDate(today.getDate() + 30);
  const timeTableMin = today.toISOString().slice(0, 10);

  /* Handle the Quote State */
  const [quote, setQuote] = useReducer(QuoteReducer, initialQuoteState);
  const [errors, setErrors] = useState({} as IQuoteErrors);
  const [isLoading, setIsLoading] = useState(false);

  const submitQuoteForm = async (gReCaptchaToken: string) => {
    try {
      const res = await fetch("/api/routes/quote", {
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
        showModal(
          <SuccessModal
            message={
              "Your quotation request sent successfully. Our team will get back to you within 1 business day."
            }
          />
        );
        setQuote({ type: ActionKind.Reset });

        setIsLoading(false);
        return data;
      }
    } catch (e) {
      showModal(
        <ErrorModal
          message={
            "Your quotation request failed to send due to a server error. Please email us at support@hnu.com with your Quotation Request."
          }
        />
      );

      setIsLoading(false);
    }
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

          <CustomerFieldset
            form={quote}
            handleInput={handleInput}
            handlePhone={handlePhone}
            errors={errors}
          />

          <fieldset className="grid grid-cols-1 md:grid-cols-3 md:col-span-2 gap-x-5">
            <CountryField
              form={quote}
              setQuote={setQuote}
              errors={errors.country}
            />
            <RegionField
              quote={quote}
              setQuote={setQuote}
              errors={errors.state}
            />
            <InputField
              id="city"
              label={
                <>
                  <FaCity /> City
                </>
              }
              placeholder=""
              value={quote.city || ""}
              onChange={handleInput}
              errors={errors?.city}
              required={true}
            />
          </fieldset>

          {/* Product Information */}
          <h2 className="col-span-2 pt-4 pb-1 text-2xl font-extrabold text-center border-b text-neutral-800 md:col-span-2 md:text-left sm:text-3xl lg:text-4xl filter drop-shadow-sm">
            Product Info
          </h2>
          <fieldset className="grid grid-cols-1 col-span-2 gap-x-6 gap-y-4 md:grid-cols-2">
            <div className="relative z-10 block col-span-2">
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
                    {quote.product
                      ? quote.product.title
                      : selectedProduct.title}
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
                  as="ul"
                >
                  <Listbox.Options className="absolute z-20 w-full my-1 overflow-auto bg-white rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
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
            <div className="col-span-2 md:col-span-1">
              <label htmlFor="timetable">Purchase Timetable</label>
              <input
                type="date"
                min={timeTableMin}
                name="timetable"
                id="timetable"
                value={quote.timetable}
                onChange={(e) => handleInput(e)}
                className="block w-full px-4 py-3 mt-3 rounded-md shadow-sm focus:ring-red-600 focus:border-white border-neutral-300"
              />{" "}
              {errors.timetable && <span>{errors.timetable}</span>}
            </div>

            <InputField
              id="applications"
              label="Applications"
              placeholder=""
              value={quote.applications}
              onChange={handleInput}
              errors={errors.city}
            />
            <TextAreaField
              id="comments"
              label="Comments"
              onChange={handleInput}
              value={quote.comments}
              errors={errors.comments}
              required={true}
              classes="col-span-2"
            />
          </fieldset>
          <HoneypotField />

          <div className="md:col-span-2 ">
            <PrivacyCheckbox
              hasConsented={quote.hasConsented}
              setRMA={setQuote}
              errors={errors}
            />

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
