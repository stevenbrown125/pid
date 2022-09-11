export default {
    name: 'addon',
    title: 'Add on',
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
      {
        name: 'price',
        type: 'number',
        title: 'Price',
      },
    ],
  };
  