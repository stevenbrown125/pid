import { NextApiRequest, NextApiResponse } from "next";
import { generateRefId } from "../utils/generateRefId";
import { sesClient } from "../../../lib/aws/sesClient";
import { createSendQuoteEmailTemplateCommand } from "../../../lib/aws/createSendQuoteEmailTemplateCommand";
import IQuote from "../../../lib/types/IQuote";
import { createSendQuoteCustomerEmailTemplate } from "../../../lib/aws/createSendQuoteCustomerEmailTemplate.ts";

export const handleQuote = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  const quote: IQuote = req.body;

  quote.refId = generateRefId(req.body.name);

  try {
    const sendEmailCommand = createSendQuoteEmailTemplateCommand(quote);
    const response = await sesClient.send(sendEmailCommand);
    if (response.$metadata.httpStatusCode === 200) {
      await setTimeout(async () => {
        // Send to customer
        const sendEmailCommand = createSendQuoteCustomerEmailTemplate(quote);
        const customerResponse = await sesClient.send(sendEmailCommand);
        res.status(200).json(customerResponse);
      }, 2000); // 2000 milliseconds delay
    } else {
      throw new Error("Error sending email");
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to send email" });
  }
};
