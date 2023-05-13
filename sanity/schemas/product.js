export default {
  name: "product",
  title: "Product",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
    },
    {
      name: "type",
      title: "Product Type",
      type: "reference",
      to: { type: "productType" },
    },
    {
      name: "gasesMeasured",
      title: "Gases Measured",
      type: "array",
      of: [
        {
          type: "reference",
          to: { type: "gas" },
        },
      ],
    },
    {
      name: "industries",
      title: "Industries",
      type: "array",
      of: [
        {
          type: "reference",
          to: { type: "industry" },
        },
      ],
    },
    {
      name: "price",
      title: "Price",
      type: "number",
    },
    {
      name: "image",
      type: "cloudinary.asset",
      title: "Main image",
    },
    {
      name: "description",
      title: "Description",
      type: "blockContent",
    },
    {
      name: "pdf",
      title: "PDF File",
      type: "file",
    },
    {
      name: "specifications",
      title: "Specifications",
      type: "array",
      of: [
        {
          type: "specification",
        },
      ],
    },
    {
      name: "features",
      title: "Features",
      type: "array",
      of: [
        {
          type: "feature",
        },
      ],
    },
    {
      name: "addons",
      title: "Addons",
      type: "array",
      of: [
        {
          type: "addon",
        },
      ],
    },
    {
      name: "order",
      title: "Sort Order",
      type: "number",
      hidden: true,
    },
  ],
};
