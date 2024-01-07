import { SendTemplatedEmailCommand } from "@aws-sdk/client-ses";
import IContact from "../types/IContact";

const fromAddress = process.env.SES_FROM_ADDRESS || "sales@hnu.com";

export const createSendContactCustomerEmailTemplateCommand = (form: IContact) => {
  const templateName = "HNU_Contact_Customer";
  const toAddress = form.email

  console.log(toAddress)
  return new SendTemplatedEmailCommand({
    Destination: {
      ToAddresses: [toAddress],
    },

    TemplateData: JSON.stringify({ form }),
    Template: templateName,
    Source: fromAddress,
  });
};
