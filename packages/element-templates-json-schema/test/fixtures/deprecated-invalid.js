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
    keyword: 'type',
    dataPath: '/deprecated',
    schemaPath: '#/allOf/0/properties/deprecated/type',
    params: {
      type: [
        'boolean',
        'object'
      ]
    },
    message: 'should be boolean,object'
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
