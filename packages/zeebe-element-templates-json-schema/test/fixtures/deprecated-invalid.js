export const template = {
  'name': 'AdditionalProperty',
  'id': 'com.camunda.example.deprecated.invalid',
  'appliesTo': [
    'bpmn:Task'
  ],
  'properties': [],
  'deprecated': "please migrate to 'FOO BAR'",
};

export const errors = [
  {
    dataPath: '/deprecated',
    keyword: 'type',
    message: 'should be boolean,object',
    params: {
      type: [
        'boolean',
        'object'
      ]
    },
    schemaPath: '#/allOf/0/properties/deprecated/type'
  },
  {
    keyword: 'type',
    dataPath: '',
    schemaPath: '#/oneOf/1/type',
    params: {
      type: 'array'
    },
    message: 'should be array'
  },
  {
    keyword: 'oneOf',
    dataPath: '',
    schemaPath: '#/oneOf',
    params: {
      passingSchemas: null
    },
    message: 'should match exactly one schema in oneOf'
  }
];
