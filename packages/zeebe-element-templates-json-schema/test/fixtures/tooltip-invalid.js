export const template = {
  name: 'Tooltip',
  id: 'example.com.tooltip',
  appliesTo: [
    'bpmn:ServiceTask'
  ],
  groups: [
    {
      id: 'group',
      label: 'Custom Group',
      tooltip: []
    },
  ],
  properties: [
    {
      label: 'Input with tooltip',
      type: 'String',
      binding: {
        type: 'property',
        name: 'prop'
      },
      tooltip: []
    },
    {
      label: 'Input in group',
      type: 'String',
      binding: {
        type: 'property',
        name: 'prop2'
      }
    },
  ]
};

export const errors = [
  {
    keyword: 'type',
    dataPath: '/properties/0/tooltip',
    schemaPath: '#/allOf/1/items/properties/tooltip/type',
    params: { type: 'string' },
    message: 'should be string'
  },
  {
    keyword: 'type',
    dataPath: '/groups/0/tooltip',
    message: 'should be string',
    params: { type: 'string' },
    schemaPath: '#/properties/groups/items/properties/tooltip/type'
  },
  {
    keyword: 'type',
    dataPath: '',
    schemaPath: '#/oneOf/1/type',
    params: { type: 'array' },
    message: 'should be array'
  },
  {
    keyword: 'oneOf',
    dataPath: '',
    schemaPath: '#/oneOf',
    params: { passingSchemas: null },
    message: 'should match exactly one schema in oneOf'
  }
];