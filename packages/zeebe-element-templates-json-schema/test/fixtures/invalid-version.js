export const template = {
  'name': 'InvalidVersion',
  'id': 'com.camunda.example.InvalidVersion',
  'version': 'foo',
  'appliesTo': [
    'bpmn:Task'
  ],
  'properties': []
};

export const errors = [
  {
    keyword: 'type',
    dataPath: '/version',
    schemaPath: '#/allOf/0/properties/version/type',
    params: { type: 'integer' },
    message: 'should be integer'
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
