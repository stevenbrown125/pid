import { SendTemplatedEmailCommand } from "@aws-sdk/client-ses";
import IQuote from "../../types/IQuote";

const toAddress = "sales@hnu.com";
const fromAddress = "sales@hnu.com";

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
