import { SendTemplatedEmailCommand } from "@aws-sdk/client-ses";
import IContact from "../types/IContact";

const toAddress = process.env.SES_TO_ADDRESS || "sales@hnu.com";
const fromAddress = process.env.SES_FROM_ADDRESS || "sales@hnu.com";

export const createSendContactEmailTemplateCommand = (contact: IContact) => {
  const templateName = "HNU_Contact";

  return new SendTemplatedEmailCommand({
    Destination: {
      ToAddresses: [toAddress],
    },

    TemplateData: JSON.stringify({ contact }),
    Template: templateName,
    Source: fromAddress,
  });
};
