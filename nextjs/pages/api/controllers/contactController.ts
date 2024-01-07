import { NextApiRequest, NextApiResponse } from "next";
import { sesClient } from "../../../lib/aws/sesClient";
import { generateRMAId } from "../utils/generateRMAId";
import { createSendContactEmailTemplateCommand } from "../../../lib/aws/createSendContactEmailTemplateCommand";
import { createSendContactCustomerEmailTemplateCommand } from "../../../lib/aws/createSendContactCustomerEmailTemplate";

export const handleContact = async (req: NextApiRequest, res: NextApiResponse) => {
  const form: any = req.body;
  form.refId = generateRMAId(req.body.name);

  try {
    const sendContactEmailCommand =
    createSendContactEmailTemplateCommand(form);
    const contactResponse = await sesClient.send(sendContactEmailCommand);
    if (contactResponse.$metadata.httpStatusCode === 200) {
      await setTimeout(async () => {
        // Send to customer
        const sendEmailCommand = createSendContactCustomerEmailTemplateCommand(form);
        const response = await sesClient.send(sendEmailCommand);
        return res.status(200).json(response);
      }, 2000); // 2000 milliseconds delay
    } else {
      throw new Error("Error sending email");
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to send email" });
  }
};
