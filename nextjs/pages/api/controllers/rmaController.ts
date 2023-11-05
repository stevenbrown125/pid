import { NextApiRequest, NextApiResponse } from "next";
import { sesClient } from "../../../lib/aws/sesClient";
import { generateRMAId } from "../utils/generateRMAId";
import IRMA from "../../../lib/types/IRMA";
import { createSendRMAEmailTemplateCommand } from "../../../lib/aws/createSendRMAEmailTemplateCommand";

export const handleRMA = async (req: NextApiRequest, res: NextApiResponse) => {
  const rma: IRMA = req.body;

  rma.refId = generateRMAId(req.body.name);

  try {
    const sendEmailCommand = createSendRMAEmailTemplateCommand(rma);
    const response = await sesClient.send(sendEmailCommand);
    console.log(response);
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ error: "Failed to send email" });
  }
};
