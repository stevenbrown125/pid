import { defineConfig } from "sanity";
import schema from "./schemas/schema";
import deskToolValue from "./deskToolValue";
import {
  cloudinaryAssetSourcePlugin,
  cloudinarySchemaPlugin,
} from "sanity-plugin-cloudinary";
import { visionTool } from "@sanity/vision";

export default defineConfig({
  name: "hnu",
  title: "PID Analyzers",
  projectId: "bg59ms84",
  dataset: "production",
  plugins: [
    deskToolValue,
    visionTool({
      // Note: These are both optional
      defaultApiVersion: "v2021-10-21",
      defaultDataset: "production",
    }),
    cloudinaryAssetSourcePlugin(),
    cloudinarySchemaPlugin(),
  ],
  schema: {
    types: schema,
  },
});
