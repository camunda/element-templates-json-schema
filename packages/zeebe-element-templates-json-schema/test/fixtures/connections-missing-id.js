export const template = {
  'name': 'Connections Missing ID',
  'id': 'example.com.connections-missing-id',
  'appliesTo': [
    'bpmn:ServiceTask'
  ],
  'properties': [],
  'connections': [
    {
      'type': 'slack'
    }
  ]
};

export const errors = [
  {
    keyword: 'required',
    dataPath: '/connections/0',
    schemaPath: '#/properties/connections/items/required',
    params: { missingProperty: 'id' },
    message: "should have required property 'id'"
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
