import { createClient } from "@sanity/client";

export default createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_ID,
  token: process.env.SANITY_API_KEY,
  apiVersion: "2023-05-03",
  dataset: "production",
  useCdn: true,
});
