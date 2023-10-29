import { NextPage } from "next";
import Link from "next/link";
import { useReducer, useState } from "react";
import { FaEnvelope, FaPhone, FaUser } from "react-icons/fa";
import PhoneInput, { formatPhoneNumber } from "react-phone-number-input/input";
import Layout from "../components/Layout";
import { ContactReducer } from "../lib/helpers/contactReducer";
import { IContactError } from "../lib/types/IContact";
import { E164Number } from "libphonenumber-js/types";
import { ActionKind } from "../lib/types/IAction";
import { Switch } from "@headlessui/react";
import { validateContact } from "../lib/helpers/validator";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import Modal from "../components/Modal";
import Seo from "../components/SEO";
import initialContactState from "../lib/initialState/contact";

const ContactPage: NextPage = () => {
  // Initialize Captcha
  const { executeRecaptcha } = useGoogleReCaptcha();

  // Set State
  const [contact, setContact] = useReducer(ContactReducer, initialContactState);
  const [errors, setErrors] = useState({} as IContactError);
  const [isLoading, setIsLoading] = useState(false);
  //TODO: Refactor State into Reducer for  Modal
  const [open, setOpen] = useState(false); // Modal State
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);

  // Submit to API
  const submitContactForm = async (gReCaptchaToken: string) => {
    const res = await fetch("/api/contact", {
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
      setMessage(
        "Your message sent successfully. Our team will get back to you within 3 business days."
      );
      setSuccess(true);
      setOpen(true);
      setContact({ type: ActionKind.Reset });
    } else {
      setMessage(
        "Your message failed to send due to a server error. Please email us at support@hnu.com with your message."
      );
      setSuccess(false);
      setOpen(true);
    }
    setIsLoading(false);
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
      setContact({
        type: ActionKind.HandleInput,
        field: "phone",
        payload: phone,
      });
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
      <Modal
        open={open}
        setOpen={setOpen}
        message={message}
        success={success}
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
              <form className="grid grid-cols-1 gap-y-6">
                <label htmlFor="firstName" className="relative block w-full">
                  <span className="flex items-center text-neutral-700">
                    <FaUser className="w-5 mx-1" />
                    Full Name
                  </span>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    autoComplete="given-name"
                    placeholder="John Doe"
                    value={contact.name}
                    disabled={isLoading}
                    onChange={(e) => handleInput(e)}
                  />
                  {errors.name && (
                    <span className="absolute pl-1 text-red-600 -bottom-6">
                      {errors.name}
                    </span>
                  )}
                </label>
                <label htmlFor="email" className="relative block">
                  <span className="flex items-center text-neutral-700">
                    <FaEnvelope className="w-5 mx-1" />
                    Email
                  </span>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="johndoe@email.com"
                    value={contact.email}
                    disabled={isLoading}
                    onChange={(e) => handleInput(e)}
                    autoComplete="email"
                  />
                  {errors.email && (
                    <span className="absolute pl-1 text-red-600 -bottom-6">
                      {errors.email}
                    </span>
                  )}
                </label>
                <label htmlFor="phone" className="relative block">
                  <span className="flex items-center text-neutral-700">
                    <FaPhone className="w-5 mx-1" />
                    Phone
                  </span>
                  <PhoneInput
                    type="tel"
                    name="phone"
                    placeholder="+1 000 000 0000"
                    id="phone"
                    value={contact.phone}
                    disabled={isLoading}
                    onChange={(e) => handlePhone(e)}
                    maxLength={17}
                    autoComplete="tel"
                    required
                  />
                  {errors.phone && (
                    <span className="absolute pl-1 text-red-600 -bottom-6">
                      {errors.phone}
                    </span>
                  )}
                </label>
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
                <label
                  htmlFor="privacy"
                  className="relative flex pb-6 font-medium text-neutral-700"
                >
                  <p className="order-2 pl-2 text-sm font-normal text-neutral-500">
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
                      checked={contact.hasConsented}
                      disabled={isLoading}
                      onChange={(e: boolean) =>
                        setContact({
                          type: ActionKind.ToggleConsent,
                          field: "hasConsent",
                          payload: e,
                        })
                      }
                      className={`${
                        contact.hasConsented ? "bg-red-600" : "bg-neutral-200"
                      } relative inline-flex h-6 w-11 items-center rounded-full`}
                    >
                      <span className="sr-only">Toggle Consent</span>
                      <span
                        className={`${
                          contact.hasConsented
                            ? "translate-x-6"
                            : "translate-x-1"
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
                <div className="ml-2">
                  <button
                    type="button"
                    disabled={isLoading}
                    onClick={handleSubmit}
                    className="inline-flex justify-center w-full px-10 py-3 text-base font-medium text-white bg-red-700 border border-transparent rounded-md shadow-sm md:max-w-max hover:bg-red-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-600"
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
