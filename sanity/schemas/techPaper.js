export default {
  name: 'techPaper',
  title: 'Tech Paper',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
        name: 'year',
        title: 'Year',
        type: 'number',
      },
    {
        name: 'author',
        title: 'Author',
        type: 'string',
      },
    {
      name: 'type',
      title: 'Category',
      type: 'reference',
      to: { type: 'paperType' },
    },
    {
      name: 'pdf',
      title: 'PDF File',
      type: 'file',
    },
    {
      name: 'order',
      title: 'Sort Order',
      type: 'number',
      hidden: true,
    },
  ],
};
