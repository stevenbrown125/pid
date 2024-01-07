import { SendTemplatedEmailCommand } from "@aws-sdk/client-ses";
import IQuote from "../types/IQuote";

const fromAddress = process.env.SES_FROM_ADDRESS || "sales@hnu.com";

export const createSendQuoteCustomerEmailTemplate = (form: IQuote) => {
  const templateName = "HNU_Quote_Customer";
  const toAddress = form.email

  return new SendTemplatedEmailCommand({
    Destination: {
      ToAddresses: [toAddress],
    },

    TemplateData: JSON.stringify({ form }),
    Template: templateName,
    Source: fromAddress,
  });
};
