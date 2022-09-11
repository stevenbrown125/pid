export default {
    name: 'gas',
    title: 'Gas',
    type: 'document',
    fields: [
      {
        name: 'name',
        title: 'Name',
        type: 'string',
      },
      {
        name: 'slug',
        title: 'Slug',
        type: 'slug',
        options: {
          source: 'name',
          maxLength: 96,
        },
      },
      {
        name: 'symbol',
        title: 'Symbol',
        type: 'blockContent',
      },
      {
        name: 'description',
        title: 'Description',
        type: 'blockContent',
      },
    ],
    preview: {
        select: {
          title: 'name',
          subtitle: 'symbol'
        }
      }
    
  };
  