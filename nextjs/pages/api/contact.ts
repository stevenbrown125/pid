import { NextApiRequest, NextApiResponse } from "next";
import { sesClient } from "../../lib/aws/sesClient";
import sanitizeHtml from 'sanitize-html';
import { randomUUID } from "crypto";
import { isPossiblePhoneNumber } from "react-phone-number-input";
import isEmail from "validator/lib/isEmail";
import IContact from "../../types/IContact";
import { initialContactState } from "../../lib/helpers/contactReducer";
import { createSendContactEmailTemplateCommand } from "../../lib/aws/createSendContactEmailTemplateCommand";

export default async function contactHandler (  req: NextApiRequest, res: NextApiResponse) {

if (req.method === "POST") {
  /* Check if user has passed the Captcha */
  try {
    const result = await fetch("https://www.google.com/recaptcha/api/siteverify", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: `secret=${process.env.GOOG_CAPTCHA_SECRET_KEY}&response=${req.body.gRecaptchaToken}`,
    })

    const reCaptchaRes = await result.json()
    console.log(reCaptchaRes)
    if (reCaptchaRes?.score > 0.5) {
      /* Passed recaptcha */
      /* Check if user has Consented */
      if(!req.body.hasConsented) {
        res.status(500).send({error: 'User has not consented to our Privacy Policy'});
        res.end();
      }
      
      /* Sanitize Input */
      let sanitzedContact : IContact = {...initialContactState}
      for(const [key, value] of Object.entries(req.body)) {
        if(typeof value === 'string') {
          sanitzedContact = {...sanitzedContact, [key]: sanitizeHtml(value) }
        } else {
          sanitzedContact = {...sanitzedContact, [key]: value }
        }
      }

      /* Validate Input */
      if(!isEmail(sanitzedContact.email)) {
        res.status(500).send({error: 'Invalid email address'})
        res.end();
      }
      if(sanitzedContact.phone) {
        if(!isPossiblePhoneNumber(sanitzedContact.phone.toString())) {
          res.status(500).send({error: 'Invalid phone number'})
          res.end();
        }
      } else {
          res.status(500).send({error: 'Phone number required'})
          res.end();
      }

      /* Create a Ref Number */
      const date = new Date()
      const refId = `${randomUUID().slice(0,5)}-${req.body.name.slice(0,3)}-${date.getFullYear()}`
      sanitzedContact = {...sanitzedContact, refId}

      /* Create SES Command */
      const sendEmailCommand = createSendContactEmailTemplateCommand(
        sanitzedContact
      );

      /* Send Email and return response */
      try {
        const response = await sesClient.send(sendEmailCommand);
        return res.status(200).json(response)
      } catch (e) {
        return res.status(500).send(e);
      }
    
    } else { // Failed captcha
      res.status(200).json({
        status: "failure",
        message: "Google ReCaptcha Failure",
      });
    }
    
  } catch (err) {
        res.status(405).json({
          status: "failure",
          message: "Error submitting the contact form",
        });
      }
  } else {
    res.status(405);
    res.end();
  }
};
