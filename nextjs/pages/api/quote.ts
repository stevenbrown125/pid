//TODO: Check Recaptcha
import { NextApiRequest, NextApiResponse } from "next";
import { createSendQuoteEmailTemplateCommand } from "../../lib/aws/createSendQuoteEmailTemplateCommand";
import { sesClient } from "../../lib/aws/sesClient";
import sanitizeHtml from 'sanitize-html';
import { randomUUID } from "crypto";
import IQuote from "../../types/IQuote";
import { initialQuoteState } from "../../lib/helpers/quoteReducer";
import { isPossiblePhoneNumber } from "react-phone-number-input";
import isEmail from "validator/lib/isEmail";

export default async function quoteHandler (  req: NextApiRequest, res: NextApiResponse) {

  /* Check if user has Consented */
  if(!req.body.hasConsented) {
     return res.status(500).send({error: 'User has not consented to our Privacy Policy'});
  }
  
  /* Sanitize Input */
  let sanitizedQuote : IQuote = {...initialQuoteState}
  for(const [key, value] of Object.entries(req.body)) {
    if(typeof value === 'string') {
      sanitizedQuote = {...sanitizedQuote, [key]: sanitizeHtml(value) }
    } else {
      sanitizedQuote = {...sanitizedQuote, [key]: value }
    }
  }

  /* Validate Input */
  if(!isEmail(sanitizedQuote.email)) 
    return res.status(500).send({error: 'Invalid email address'})

  if(sanitizedQuote.phone) {
    if(!isPossiblePhoneNumber(sanitizedQuote.phone.toString()))
      return res.status(500).send({error: 'Invalid phone number'})
  } else {
      return res.status(500).send({error: 'Phone number required'})
  }
  //TODO: Check CAPTCHA



  /* Create a Ref Number */
  const date = new Date()
  const refId = `${randomUUID().slice(0,5)}-${req.body.name.slice(0,3)}-${date.getFullYear()}`
  sanitizedQuote = {...sanitizedQuote, refId}

  console.log(sanitizedQuote)
  /* Create SES Command */
  const sendEmailCommand = createSendQuoteEmailTemplateCommand(
    sanitizedQuote
  );
    console.log(sendEmailCommand)
  /* Send Email and return response */
  try {
     const response = await sesClient.send(sendEmailCommand);
     return res.status(200).json(response)
  } catch (e) {
    return res.status(500).send(e);
  }
};
