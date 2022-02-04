export const template = {
  'name': 'NumberAsValue',
  'id': 'com.camunda.example.NumberAsValue',
  'appliesTo': [
    'bpmn:Task'
  ],
  'properties': [
    {
      'label': 'Are you awesome?',
      'type': 'String',
      'value': 50,
      'binding': {
        'type': 'property',
        'name': 'camunda:asyncBefore'
      }
    }
  ]
};

export const errors = [
  {
    keyword: 'type',
    dataPath: '/properties/0/value',
    schemaPath: '#/definitions/properties/allOf/0/items/properties/value/type',
    params: {
      type: [
        'string',
        'boolean'
      ]
    },
    message: 'should be string,boolean'
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
