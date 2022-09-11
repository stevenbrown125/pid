import Head from 'next/head'
import { CreditCard, PaymentForm } from 'react-square-web-payments-sdk'

export default function WebPaymentForm({
  appId,
  locationId
}: any): JSX.Element {
  return (
    <>
      <PaymentForm
        /**
         * Identifies the calling form with a verified application ID generated from
         * the Square Application Dashboard.
         */
        applicationId={appId}
        /**
         * Invoked when payment form receives the result of a tokenize generation
         * request. The result will be a valid credit card or wallet token, or an error.
         */
        cardTokenizeResponseReceived={async (token, buyer) => {
          const response = await fetch('/api/pay', {
            method: 'POST',
            headers: {
              'Content-type': 'application/json',
              Accept: 'application/json'
            },
            body: JSON.stringify({ sourceId: token.token })
          })
          console.info(JSON.stringify(await response.json(), null, 2))
        }}
        /**
         * This function enable the Strong Customer Authentication (SCA) flow
         *
         * We strongly recommend use this function to verify the buyer and reduce
         * the chance of fraudulent transactions.
         */
        createVerificationDetails={() => ({
          amount: '1.00',
          /* collected from the buyer */
          billingContact: {
            addressLines: ['123 Main Street', 'Apartment 1'],
            familyName: 'Doe',
            givenName: 'John',
            countryCode: 'GB',
            city: 'London'
          },
          currencyCode: 'USD',
          intent: 'CHARGE'
        })}
        /**
         * Identifies the location of the merchant that is taking the payment.
         * Obtained from the Square Application Dashboard - Locations tab.
         */
        locationId={locationId}
      >
        <CreditCard></CreditCard>
      </PaymentForm>
    </>
  )
}
