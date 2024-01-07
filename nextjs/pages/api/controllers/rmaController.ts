import { NextApiRequest, NextApiResponse } from "next";
import { sesClient } from "../../../lib/aws/sesClient";
import { generateRMAId } from "../utils/generateRMAId";
import IRMA from "../../../lib/types/IRMA";
import { createSendRMAEmailTemplateCommand } from "../../../lib/aws/createSendRMAEmailTemplateCommand";
import { createSendRMAResponseEmailTemplateCommand } from "../../../lib/aws/createSendRMAResponseEmailTemplateCommand";

export const handleRMA = async (req: NextApiRequest, res: NextApiResponse) => {
  const rma: IRMA = req.body;
  rma.refId = generateRMAId(req.body.name);

  try {
    const sendCustomerEmailCommand =
      createSendRMAResponseEmailTemplateCommand(rma);
    const customerResponse = await sesClient.send(sendCustomerEmailCommand);

    if (customerResponse.$metadata.httpStatusCode === 200) {
      setTimeout(async () => {
        console.log(rma);
        const sendEmailCommand = createSendRMAEmailTemplateCommand(rma);
        const response = await sesClient.send(sendEmailCommand);
        res.status(200).json(response);
      }, 2000); // 2000 milliseconds delay
    } else {
      throw new Error("Error sending email");
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to send email" });
  }
};
