// Load the AWS SDK for Node.js
var AWS = require("aws-sdk");
// Set the region
AWS.config.update({ region: "us-east-1" });

// Create updateTemplate parameters
var params = {
  Template: {
    TemplateName: "HNU_Quote_Customer" /* required */,
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
  <p>Greetings {{form.name}}! PID Analyzers has received a quotation request via the request a quote form on our website. Here is your Reference Number:</p>
  <h3>#{{form.refId}}</h3>
  <p>Most responses are made within one business day.</p>
  </body>
</html>
    `,
    SubjectPart: "PID Analyzer quotation request received",
    TextPart:
      "New Quotation Request\r\nGreetings {{form.name}}! PID Analyzers has received a quotation request via the request a quote form on our website. Here is your Reference Number:\r\n#{{form.refId}}\r\nMost responses are made within one business day.",
  },
};

// Create the promise and SES service object
var templatePromise = new AWS.SES({ apiVersion: "2010-12-01" })
  .updateTemplate(params)
  .promise();

// Handle promise's fulfilled/rejected states
templatePromise
  .then(function (data) {
    console.log("Template Updated");
  })
  .catch(function (err) {
    console.error(err, err.stack);
  });
