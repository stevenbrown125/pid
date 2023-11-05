import { useContext, useReducer, useState } from "react";
import { NextPage } from "next";
import Layout from "../../components/Layout";
import { validateRMA } from "../../lib/helpers/validator";
import { formatPhoneNumber } from "react-phone-number-input";
import { E164Number } from "libphonenumber-js/types";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import Seo from "../../components/SEO";
import initialRMAState from "../../lib/initialState/rma";
import { RMAReducer } from "../../lib/helpers/rmaReducer";
import { IRMAErrors } from "../../lib/types/IRMA";
import { IAddress } from "../../lib/types/common";
import { ActionKind } from "../../lib/types/IAction";
import { ModalContext } from "../../providers/ModalProvider";
import SuccessModal from "../../components/modal/SuccessModal";
import ErrorModal from "../../components/modal/ErrorModal";
import {
  AddressFieldset,
  CustomerFieldset,
  PrivacyCheckbox,
  ReturnAuthorizationFieldset,
} from "../../components/form";
import { HoneypotField, ToggleField } from "../../components/form/fields";

const RMAPage: NextPage = () => {
  const { executeRecaptcha } = useGoogleReCaptcha();
  const { showModal } = useContext(ModalContext);

  /* Handle the RMA State */
  const [rma, setRMA] = useReducer(RMAReducer, initialRMAState);
  const [isSameAddress, setIsSameAddress] = useState(false);
  const [errors, setErrors] = useState({} as IRMAErrors);
  const [isLoading, setIsLoading] = useState(false);

  const handleBillingAddressChange = (updatedAddress: IAddress) => {
    setRMA({
      type: ActionKind.HandleInput,
      field: "billingAddress",
      payload: updatedAddress,
    });
  };

  const handleShippingAddressChange = (updatedAddress: IAddress) => {
    setRMA({
      type: ActionKind.HandleInput,
      field: "shippingAddress",
      payload: updatedAddress,
    });
  };

  const submitRMAForm = async (gReCaptchaToken: string) => {
    const res = await fetch("/api/rma", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...rma,
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
      setRMA({ type: ActionKind.Reset });
    } else {
      showModal(
        <ErrorModal
          message={
            "Your quotation request failed to send due to a server error. Please email us at support@hnu.com with your Quotation Request."
          }
        />
      );
    }
    setIsLoading(false);
    return data;
  };

  const handleInput = (e: React.SyntheticEvent) => {
    const target = e.target as typeof e.target & {
      name: string;
      value: string;
    };
    setRMA({
      type: ActionKind.HandleInput,
      field: target.name,
      payload: target.value,
    });
  };

  const handlePhone = (e: E164Number | undefined) => {
    if (e === undefined) return;
    setRMA({
      type: ActionKind.HandleInput,
      field: "phone",
      payload: e,
    });
  };

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    console.log(rma);
    setIsLoading(true);
    const phone = rma.phone;
    try {
      /* Validate Client Side */
      const submissionErrors = validateRMA(rma);
      setErrors(submissionErrors);
      if (Object.keys(submissionErrors).length > 0) throw "Validation Error";

      /* Fixes E164Number toString issue */
      setRMA({
        type: ActionKind.HandleInput,
        field: "phone",
        payload: formatPhoneNumber(rma.phone || ""),
      });

      /* No Errors, so send to API and clear any errors */
      if (!executeRecaptcha) throw "Execute recaptcha not yet available";

      // Wrap submission with Recaptcha
      const gReCaptchaToken = await executeRecaptcha("contactFormSubmit");

      const submissionResponse = await submitRMAForm(gReCaptchaToken);

      /* Return the Phone number back to E164Number, unless it is already reset*/
      if (submissionResponse.$metadata.httpStatusCode !== 200) {
        setRMA({
          type: ActionKind.HandleInput,
          field: "phone",
          payload: phone,
        });
      }
    } catch (e: any) {
      setRMA({
        type: ActionKind.HandleInput,
        field: "phone",
        payload: phone,
      });

      setIsLoading(false);
    }
  };

  return (
    <Layout>
      <Seo
        title="Return Authorization Form"
        description="Interested in purchasing one of our products? Please fill in the details below so that we can get in contact with you."
      />

      <section className="relative px-4 pt-6 pb-12 mx-auto sm:px-12 lg:px-16 lg:max-w-7xl">
        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 lg:gap-x-12 lg:gap-y-8 gap-x-4 gap-y-4"
        >
          <div className="text-base md:col-span-2">
            <h2 className="font-semibold leading-6 tracking-wide text-red-600 uppercase">
              PID Analyzers
            </h2>
            <h3 className="text-3xl font-extrabold leading-8 tracking-tight text-stone-800 sm:text-4xl">
              Return Authorization Form
            </h3>
          </div>

          {/* Fieldsets */}
          <CustomerFieldset
            form={rma}
            handleInput={handleInput}
            handlePhone={handlePhone}
            errors={errors}
          />
          <AddressFieldset
            title="Billing Address"
            address={rma.billingAddress}
            onChange={handleBillingAddressChange}
            errors={errors.billingAddress}
          />
          <ToggleField
            isChecked={isSameAddress}
            onToggle={setIsSameAddress}
            id="sameAsBilling"
            name="sameAsBilling"
            description="Shipping address is same as billing"
          />
          <AddressFieldset
            title="Shipping Address"
            address={isSameAddress ? rma.billingAddress : rma.shippingAddress}
            onChange={handleShippingAddressChange}
            errors={errors.shippingAddress}
            hidden={isSameAddress}
            disabled={isSameAddress}
          />
          <ReturnAuthorizationFieldset
            rma={rma}
            handleInput={handleInput}
            setRMA={setRMA}
            errors={errors}
          />

          <HoneypotField />

          <div className=" md:col-span-2">
            <PrivacyCheckbox
              hasConsented={rma.hasConsented}
              setRMA={setRMA}
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
export default RMAPage;
