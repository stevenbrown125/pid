import { SendTemplatedEmailCommand } from "@aws-sdk/client-ses";
import IQuote from "../types/IQuote";

const toAddress = process.env.SES_TO_ADDRESS || "sales@hnu.com";
const fromAddress = process.env.SES_FROM_ADDRESS || "sales@hnu.com";

export const createSendQuoteEmailTemplateCommand = (quote: IQuote) => {
  const templateName = "HNU_Quote";

  return new SendTemplatedEmailCommand({
    Destination: {
      ToAddresses: [toAddress],
    },

    TemplateData: JSON.stringify({ quote }),
    Template: templateName,
    Source: fromAddress,
  });
};
