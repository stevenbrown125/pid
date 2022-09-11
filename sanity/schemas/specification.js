export default {
  name: 'specification',
  title: 'Specification',
  type: 'object',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'description',
      type: 'blockContent',
      title: 'Description',
    },
  ],
};
