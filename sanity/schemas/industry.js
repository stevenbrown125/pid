export default {
  name: 'industry',
  title: 'Industry',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "name",
        maxLength: 96,
      },
    },
    {
      type: "cloudinary.asset",
      title: "Image",
      name: "image",
    },
  ],
};
