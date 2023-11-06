// Load the AWS SDK for Node.js
var AWS = require("aws-sdk");
// Set the region
AWS.config.update({ region: "us-east-1" });

// Create updateTemplate parameters
var params = {
  Template: {
    TemplateName: "HNU_RMA_Response" /* required */,
    HtmlPart: `
    <!DOCTYPE html>
    <html
    lang="en"
    xmlns="http://www.w3.org/1999/xhtml"
    xmlns:o="urn:schemas-microsoft-com:office:office"
    >
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <meta name="x-apple-disable-message-reformatting" />
        <title></title>
        <!--[if mso]>
        <noscript>
            <xml>
            <o:OfficeDocumentSettings>
                <o:PixelsPerInch>96</o:PixelsPerInch>
            </o:OfficeDocumentSettings>
            </xml>
        </noscript>
        <![endif]-->
        <style>
        table,
        td,
        div,
        h1,
        p {
            font-family: Arial, sans-serif;
        }
        table,
        td {
            border: 2px solid #000000 !important;
        }
        </style>
    </head>
    <body style="margin: 0; padding: 0">
    <h1>PID Analyzers</h1>
    <p>Greetings {{rma.name}}! Here is your Return Authorization Number:</p>
    <h3>#{{rma.refId}}</h3>
    <p>This number should appear on the shipping label and be used when inquiring about this return.</p>

    <p>Please ship units to:</p>
    <p>PID Analyzers, LLC, Service Department<br />2 Washington Circle, #4, sandwich, MA 02563 USA<br />Tel# 774-413-5281</p>
    <p><strong>DO NOT SHIP CALIBRATION GASES OR INSTRUMENTS CONTAINING RADIOACTIVE SOURCES TO US.</strong></p>
        <p>Additional questions should be sent to <a href="mailto:service@hnu.com">service@hnu.com</a> or via phone at 774-413-5281 X202.
    </body>
    </html>
    `,
    SubjectPart: "New Return Authorization from HNU",
    TextPart:
      "PID Analyzers\n\r" +
      "Here is your Return Authorization Number:\n\r" +
      "#{rma.refId}\n\r" +
      "This number should appear on the shipping label and be used when inquiring about this return.\n\r" +
      "\n\r" +
      "Please ship units to:\n\r" +
      "PID Analyzers, LLC, Service Department\n\r" +
      "2 Washington Circle, #4, Sandwich, MA 02563 USA\n\r" +
      "Tel# 774-413-5281\n\r" +
      "\n\r" +
      "DO NOT SHIP CALIBRATION GASES OR INSTRUMENTS CONTAINING RADIOACTIVE SOURCES TO US.\n\r" +
      "\n\r" +
      "Additional questions should be sent to service@hnu.com or via phone at 774-413-5281 X202.",
  },
};

// Create the promise and SES service object
var templatePromise = new AWS.SES({ apiVersion: "2010-12-01" })
  .createTemplate(params)
  .promise();

// Handle promise's fulfilled/rejected states
templatePromise
  .then(function (data) {
    console.log("Template Updated");
  })
  .catch(function (err) {
    console.error(err, err.stack);
  });
