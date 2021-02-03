export const templates = {
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
    dataPath: '',
    schemaPath: '#/type',
    params: {
      'type': 'object'
    },
    message: 'should be object'
  },
  {
    dataPath: '',
    keyword: 'type',
    message: 'should be array',
    params: {
      type: 'array',
    },
    schemaPath: '#/oneOf/1/type',
  },
  {
    dataPath: '',
    keyword: 'oneOf',
    message: 'should match exactly one schema in oneOf',
    params: {
      passingSchemas: null
    },
    schemaPath: '#/oneOf'
  }
];
