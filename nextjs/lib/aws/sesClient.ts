import { SESClient } from "@aws-sdk/client-ses";

// Set the AWS Region.
const REGION = "us-east-1";

// Create SES service object.
const sesClient = new SESClient({ region: REGION, credentials: { accessKeyId: process.env.AZM_ACCESS_KEY_ID ?? '', secretAccessKey:process.env.AZM_SECRET_ACCESS_KEY ??''} });
export { sesClient };
