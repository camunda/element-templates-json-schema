export const template = {
  'name': 'Connections Missing Type',
  'id': 'example.com.connections-missing-type',
  'appliesTo': [
    'bpmn:ServiceTask'
  ],
  'properties': [],
  'connections': [
    {
      'id': 'slack-connection'
    }
  ]
};

export const errors = [
  {
    keyword: 'required',
    dataPath: '/connections/0',
    schemaPath: '#/properties/connections/items/required',
    params: { missingProperty: 'type' },
    message: "should have required property 'type'"
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
