import { SendTemplatedEmailCommand } from "@aws-sdk/client-ses";
import IRMA from "../types/IRMA";

const toAddress = process.env.SES_TO_ADDRESS || "sales@hnu.com";
const fromAddress = process.env.SES_FROM_ADDRESS || "sales@hnu.com";

export const createSendRMAEmailTemplateCommand = (rma: IRMA) => {
  const templateName = "HNU_RMA";

  console.log(toAddress);
  return new SendTemplatedEmailCommand({
    Destination: {
      ToAddresses: [toAddress],
    },

    TemplateData: JSON.stringify({ rma }),
    Template: templateName,
    Source: fromAddress,
  });
};
