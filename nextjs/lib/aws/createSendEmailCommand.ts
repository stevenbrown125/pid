

import { SendEmailCommand } from "@aws-sdk/client-ses";

interface IEmail {
  subject: string,
  html: string,
  body: string,

}
export const createSendEmailCommand = (toAddress: string, fromAddress:string, email: IEmail) => {
  return new SendEmailCommand({
    Destination: {
      ToAddresses: [
        toAddress
      ],
    },
    Message: {
      Body: {
        Html: {
          Charset: "UTF-8",
          Data: email.html,
        },
        Text: {
          Charset: "UTF-8",
          Data: email.body,
        },
      },
      Subject: {
        Charset: "UTF-8",
        Data: email.subject,
      },
    },
    Source: fromAddress,
  });
};

