// Load the AWS SDK for Node.js
var AWS = require("aws-sdk");
// Set the region
AWS.config.update({ region: "us-east-1" });

// Create updateTemplate parameters
var params = {
  Template: {
    TemplateName: "HNU_RMA" /* required */,
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
        <th style="padding: 0; column-span: 2">
          <h1 style="margin: 0">HNU RMA Request</h1>
          <p style="margin: 0; padding: 0; color: #dc2626; font-weight: bold">
            RMA #: {{rma.refId}}
          </p>
        </th>
      </tr>
      <tr>
        <td style="padding: 2px">Name</td>
        <td style="padding: 2px">{{rma.name}}</td>
      </tr>
      <tr>
        <td style="padding: 2px">Email</td>
        <td style="padding: 2px">{{rma.email}}</td>
      </tr>
      <tr>
        <td style="padding: 2px">Phone</td>
        <td style="padding: 2px">{{rma.phone}}</td>
      </tr>
      <tr>
        <td style="padding: 2px">Company</td>
        <td style="padding: 2px">{{rma.company}}</td>
      </tr>
      <tr>
        <td style="padding: 2px">Billing Address</td>
        <td style="padding: 2px">
          {{rma.billingAddress.street}}<br />{{rma.billingAddress.city}},
          {{rma.billingAddress.state}} {{rma.billingAddress.zip}}, {{rma.billingAddress.country}}
        </td>
      </tr>
      <tr>
        <td style="padding: 2px">Shipping Address</td>
        <td style="padding: 2px">
          {{rma.shippingAddress.street}}<br />{{rma.shippingAddress.city}},
          {{rma.shippingAddress.state}} {{rma.shippingAddress.zip}}, {{rma.shippingAddress.country}}
        </td>
      </tr>
      <tr>
        <td style="padding: 2px">Turnaround Time</td>
        <td style="padding: 2px">{{rma.turnaroundTime}}</td>
      </tr>
      <tr>
        <td style="padding: 2px">Owns Product</td>
        <td style="padding: 2px">
          {{rma.ownEquipment}} | {{rma.whoOwnsEquipment}}
        </td>
      </tr>
      <tr>
        <td style="padding: 2px">Communicated With Us</td>
        <td style="padding: 2px">
          {{rma.communicatedWithUs}} | {{rma.whoWorkingWith}}
        </td>
      </tr>
      <tr>
        <td style="padding: 2px">Reason for Return</td>
        <td style="padding: 2px">
          {{rma.reasonForReturn}} 
        </td>
      </tr>
      <tr>
        <td style="padding: 2px">Holding Accessories</td>
        <td style="padding: 2px">{{rma.holdingAccessories}}</td>
      </tr>
      <tr>
        <td style="padding: 2px">Other Comments</td>
        <td style="padding: 2px">{{rma.otherComments}}</td>
      </tr>
    </table>
  </body>
</html>

    `,
    SubjectPart: "HNU New RMA",
    TextPart: `HNU RMA Request
    RMA #: {{rma.refId}}

    Name: {{rma.name}}
    Email: {{rma.email}}
    Phone: {{rma.phone}}
    Company: {{rma.company}}
    Billing Address: 
      {{rma.billingAddress.street}}
      {{rma.billingAddress.city}}, {{rma.billingAddress.state}} {{rma.billingAddress.zip}}, {{rma.billingAddress.country}}
    Shipping Address: 
      {{rma.shippingAddress.street}}
      {{rma.shippingAddress.city}}, {{rma.shippingAddress.state}} {{rma.shippingAddress.zip}}, {{rma.shippingAddress.country}}
    Turnaround Time: {{rma.turnaroundTime}}
    Owns Product: {{rma.ownEquipment}} | {{rma.whoOwnsEquipment}}
    Communicated With Us: {{rma.communicatedWithUs}} | {{rma.whoWorkingWith}}
    Reason for Return: {{rma.reasonForReturn}}
    Holding Accessories: {{rma.holdingAccessories}}
    Other Comments: {{rma.otherComments}}`,
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
