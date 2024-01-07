import { NextPage } from "next";
import Link from "next/link";
import { useContext, useReducer, useState } from "react";
import { FaEnvelope, FaPhone, FaUser } from "react-icons/fa";
import { formatPhoneNumber } from "react-phone-number-input/input";
import Layout from "../components/Layout";
import { ContactReducer } from "../lib/helpers/contactReducer";
import { IContactError } from "../lib/types/IContact";
import { E164Number } from "libphonenumber-js/types";
import { ActionKind } from "../lib/types/IAction";
import { validateContact } from "../lib/helpers/validator";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import Seo from "../components/SEO";
import initialContactState from "../lib/initialState/contact";
import {
  HoneypotField,
  InputField,
  PhoneField,
} from "../components/form/fields";
import { PrivacyCheckbox } from "../components/form";
import { ModalContext } from "../providers/ModalProvider";
import SuccessModal from "../components/modal/SuccessModal";
import ErrorModal from "../components/modal/ErrorModal";

const ContactPage: NextPage = () => {
  // Initialize Captcha
  const { executeRecaptcha } = useGoogleReCaptcha();
  const { showModal } = useContext(ModalContext);
  // Set State
  const [contact, setContact] = useReducer(ContactReducer, initialContactState);
  const [errors, setErrors] = useState({} as IContactError);
  const [isLoading, setIsLoading] = useState(false);

  // Submit to API
  const submitContactForm = async (gReCaptchaToken: string) => {
    try {
      const res = await fetch("/api/routes/contact", {
        method: "POST",
        headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...contact,
          gRecaptchaToken: gReCaptchaToken,
        }),
      });

      const data = await res.json();

      if (data.$metadata.httpStatusCode === 200) {
        showModal(
          <SuccessModal
            message={
              "Your contact request sent successfully. Our team will get back to you within 1 business day."
            }
          />
        );
        setContact({ type: ActionKind.Reset });

        setIsLoading(false);
        return data;
      }
    } catch (e) {
      showModal(
        <ErrorModal
          message={
            "Your contact request failed to send due to a server error. Please email us at support@hnu.com with your Quotation Request."
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
    setContact({
      type: ActionKind.HandleInput,
      field: target.name,
      payload: target.value,
    });
  };

  const handlePhone = (e: E164Number | undefined) => {
    if (e === undefined) return;
    setContact({
      type: ActionKind.HandleInput,
      field: "phone",
      payload: e,
    });
  };

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    setIsLoading(true);
    const phone = contact.phone;
    try {
      /* Validate Client Side */
      const submissionErrors = validateContact(contact);
      setErrors(submissionErrors);
      if (Object.keys(submissionErrors).length > 0) throw "Validation Error";

      /* Fixes E164Number toString issue */
      setContact({
        type: ActionKind.HandleInput,
        field: "phone",
        payload: formatPhoneNumber(contact.phone),
      });

      /* No Errors, so send to API and clear any errors */
      if (!executeRecaptcha) throw "Execute recaptcha not yet available";

      // Wrap submission with Recaptcha
      const gReCaptchaToken = await executeRecaptcha("contactFormSubmit");

      const submissionResponse = await submitContactForm(gReCaptchaToken);

      /* Return the Phone number back to E164Number */

      if (submissionResponse.$metadata.httpStatusCode !== 200) {
        setContact({
          type: ActionKind.HandleInput,
          field: "phone",
          payload: phone,
        });
      }
    } catch (e: any) {
      // Validation Error already handled

      setContact({
        type: ActionKind.HandleInput,
        field: "phone",
        payload: phone,
      });
    }
    setIsLoading(false);
  };

  return (
    <Layout>
      <Seo
        title="Contact Us"
        description=" We'd love to hear from you! Fill out and submit this form and
              our team will get back to you as soon as possible."
      />
      <section>
        <div className="relative px-4 mx-auto -mt-2 sm:px-12 lg:px-16 lg:max-w-7xl md:grid md:grid-cols-5">
          <div className="md:col-span-2 xl:pr-12">
            <div className="pt-8 text-base">
              <h2 className="font-semibold leading-6 tracking-wide text-red-600 uppercase">
                Contact Us
              </h2>
              <h3 className="text-3xl font-extrabold leading-8 tracking-tight text-stone-800 sm:text-4xl">
                Get in touch
              </h3>
            </div>
            <p className="mt-6 text-lg leading-6 text-center lg:text-left text-neutral-500">
              We&apos;d love to hear from you! Fill out and submit this form and
              our team will get back to you within 1 business day.
            </p>
            <dl className="mt-6 text-base text-center text-neutral-500 lg:text-left">
              <div>
                <dt className="sr-only">Postal address</dt>
                <dd>
                  <p>2 Washington Circle, Unit 4</p>
                  <p>Sandwich, Ma 02563</p>
                </dd>
              </div>
              <div className="mt-6">
                <dt className="sr-only">Phone number</dt>
                <dd className="flex justify-center lg:justify-start">
                  <a
                    href="tel:1-774-413-5281"
                    className="flex items-center hover:text-red-600"
                  >
                    <FaPhone className="w-5 h-5 mr-2" aria-hidden="true" />
                    +1 (774) 413-5281
                  </a>
                </dd>
              </div>
              <div className="mt-3">
                <dt className="sr-only">Email</dt>
                <dd className="flex justify-center lg:justify-start">
                  <a
                    href="mailto:support@hnu.com"
                    className="flex items-center hover:text-red-600"
                  >
                    <FaEnvelope className="w-5 h-5 mr-2" aria-hidden="true" />
                    support@hnu.com
                  </a>
                </dd>
              </div>
            </dl>
            <p className="mt-6 text-base text-center text-neutral-500 lg:text-left">
              Looking for a price estimate?
              <Link
                href="/request-a-quote"
                className="ml-1 font-medium underline text-neutral-700 hover:text-red-600"
              >
                Request a Quote
              </Link>
            </p>
          </div>
          <div className="px-4 py-6 bg-white md:shadow-md sm:px-6 md:col-span-3 md:py-12 md:px-8 xl:pl-12">
            <div className="max-w-lg mx-auto lg:max-w-none">
              <form
                className="grid grid-cols-1 gap-y-6"
                onSubmit={handleSubmit}
              >
                <fieldset>
                  <InputField
                    id="name"
                    label={
                      <>
                        <FaUser />
                        Full Name
                      </>
                    }
                    placeholder="John Doe"
                    autoComplete="given-name"
                    value={contact.name}
                    onChange={handleInput}
                    errors={errors.name}
                    required={true}
                  />
                  <InputField
                    id="email"
                    label={
                      <>
                        <FaEnvelope />
                        Email
                      </>
                    }
                    placeholder="johndoe@email.com"
                    autoComplete="email"
                    value={contact.email}
                    onChange={handleInput}
                    errors={errors.email}
                    required={true}
                  />
                  <PhoneField
                    value={contact.phone}
                    onChange={handlePhone}
                    errors={errors}
                  />
                  <label htmlFor="message" className="relative block">
                    <span className="flex items-center text-neutral-700">
                      <FaEnvelope className="w-5 mx-1" />
                      Message
                    </span>
                    <textarea
                      rows={4}
                      name="message"
                      id="message"
                      disabled={isLoading}
                      onChange={(e) => handleInput(e)}
                      value={contact.message}
                    />
                    {errors.message && (
                      <span className="pl-1 text-red-600 md:absolute md:-bottom-6 ">
                        {errors.message}
                      </span>
                    )}
                  </label>
                  <div className="hidden">
                    <label htmlFor="field">
                      Don&apos;t fill this out if you&apos;re human:
                      <input name="field" />
                    </label>
                  </div>
                  <HoneypotField />
                </fieldset>
                <div className="md:col-span-2">
                  <PrivacyCheckbox
                    hasConsented={contact.hasConsented}
                    setRMA={setContact}
                    errors={errors}
                  />
                  <div
                    className="pl-2 my-6 g-recaptcha"
                    data-sitekey="6LcMc2AfAAAAAGAm9zAtZW_dPuQFaHF7eqvVsOqV"
                  />
                  {Object.keys(errors).length > 0 && (
                    <span className="block w-full pb-4 pl-1 font-bold text-red-600 md:col-span-2">
                      There are errors in the form. Please correct any errors
                      before attempting to submit again.
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
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ContactPage;
