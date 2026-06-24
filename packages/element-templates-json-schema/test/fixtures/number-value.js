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
    schemaPath: '#/definitions/properties/allOf/0/items/allOf/1/then/properties/value/type',
    params: {
      type: [
        'string',
        'boolean'
      ]
    },
    message: 'should be string,boolean'
  },
  {
    keyword: 'if',
    dataPath: '/properties/0',
    schemaPath: '#/definitions/properties/allOf/0/items/allOf/1/if',
    params: {
      failingKeyword: 'then'
    },
    message: 'should match "then" schema'
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
