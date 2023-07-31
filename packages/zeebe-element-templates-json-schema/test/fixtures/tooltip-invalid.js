export const template = {
  name: 'Tooltip',
  id: 'example.com.tooltip',
  appliesTo: [
    'bpmn:ServiceTask'
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
    }
  ]
};

export const errors = [
  {
    keyword: 'type',
    dataPath: '/properties/0/tooltip',
    schemaPath: '#/allOf/0/items/properties/tooltip/type',
    params: { type: 'string' },
    message: 'should be string'
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