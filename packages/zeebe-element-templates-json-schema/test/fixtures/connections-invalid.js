export const template = {
  'name': 'Connections Invalid',
  'id': 'example.com.connections-invalid',
  'appliesTo': [
    'bpmn:ServiceTask'
  ],
  'properties': [],
  'connections': [
    {
      'id': 'slack-connection',
      'type': 'slack',
      'unknownProperty': 'value'
    }
  ]
};

export const errors = [
  {
    keyword: 'additionalProperties',
    dataPath: '/connections/0',
    schemaPath: '#/properties/connections/items/additionalProperties',
    params: { additionalProperty: 'unknownProperty' },
    message: 'should NOT have additional properties'
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
