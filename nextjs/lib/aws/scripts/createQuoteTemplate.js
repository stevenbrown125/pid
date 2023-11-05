// Load the AWS SDK for Node.js
var AWS = require("aws-sdk");
// Set the region
AWS.config.update({ region: "us-east-1" });

// Create updateTemplate parameters
var params = {
  Template: {
    TemplateName: "HNU_Quote" /* required */,
    HtmlPart: `
    <!-- Used for Proper HTML & CSS Checking prior to pasting into 'scripts/createXTemplate'-->

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
    <table
      role="presentation"
      style="
        width: 602px;
        border-collapse: collapse;
        border: 1px solid #cccccc;
        border-spacing: 0;
        text-align: left;
      "
    >
      <tr>
        <td colspan="2" style="padding: 0; text-align: center">
          <h1 style="margin: 0">HNU Quotation Request</h1>
          <p style="margin: 0; padding: 0; color: #dc2626; font-weight: bold">
            Reference #: {{quote.refId}}
          </p>
        </td>
      </tr>
      <tr>
        <td style="padding: 2px">Name</td>
        <td style="padding: 2px">{{quote.name}}</td>
      </tr>
      <tr>
        <td style="padding: 2px">Email</td>
        <td style="padding: 2px">{{quote.email}}</td>
      </tr>
      <tr>
        <td style="padding: 2px">Phone</td>
        <td style="padding: 2px">{{quote.phone}}</td>
      </tr>
      <tr>
        <td style="padding: 2px">Company</td>
        <td style="padding: 2px">{{quote.company}}</td>
      </tr>
      <tr>
        <td style="padding: 2px">City</td>
        <td style="padding: 2px">{{quote.city}}</td>
      </tr>
      <tr>
        <td style="padding: 2px">State</td>
        <td style="padding: 2px">{{quote.state}}</td>
      </tr>
      <tr>
        <td style="padding: 2px">Country</td>
        <td style="padding: 2px">{{quote.country}}</td>
      </tr>
      <tr>
        <td style="padding: 2px">Requested Timetable</td>
        <td style="padding: 2px">{{quote.timetable}}</td>
      </tr>
      <tr>
        <td style="padding: 2px">Product</td>
        <td style="padding: 2px">{{quote.product.title}}</td>
      </tr>
      <tr>
        <td style="padding: 2px">Applications</td>
        <td style="padding: 2px">{{quote.applications}}</td>
      </tr>
      <tr>
        <td style="padding: 2px">Comments</td>
        <td style="padding: 2px">{{quote.comments}}</td>
      </tr>
    </table>
  </body>
</html>
    `,
    SubjectPart: "HNU New Quotation",
    TextPart:
      "New Quotation Request\r\nReference #{{quote.refId}}\r\n\r\nName\t{{quote.name}}\r\nEmail:\t{{quote.email}}\r\nPhone\t{{quote.phone}}\r\nCompany\t{{quote.company}}\r\nCity\t{{quote.city}}\r\nState\r{{quote.state}}\r\nCountry\t{{quote.country}}\r\nRequested Timetable\t{{quote.timetable}}\r\nApplications:\t{quote.applications}}\r\nProduct\t{{quote.product.title}}\r\nComments\t{{quote.comments}}",
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
