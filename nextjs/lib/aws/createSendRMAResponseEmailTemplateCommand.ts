import { SendTemplatedEmailCommand } from "@aws-sdk/client-ses";
import IRMA from "../types/IRMA";

const fromAddress = process.env.SES_FROM_ADDRESS || "sales@hnu.com";

export const createSendRMAResponseEmailTemplateCommand = (rma: IRMA) => {
  const templateName = "HNU_RMA_Response";

  return new SendTemplatedEmailCommand({
    Destination: {
      ToAddresses: [rma.email],
    },

    TemplateData: JSON.stringify({ rma }),
    Template: templateName,
    Source: fromAddress,
  });
};
