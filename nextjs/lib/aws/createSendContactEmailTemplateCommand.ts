import { SendTemplatedEmailCommand } from "@aws-sdk/client-ses";
import IContact from "../../types/IContact";

const toAddress = "sales@hnu.com";
const fromAddress = "sales@hnu.com";

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
