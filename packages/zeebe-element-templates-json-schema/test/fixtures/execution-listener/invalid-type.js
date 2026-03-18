export const template = {
  'name': 'ExecutionListenerInvalidType',
  'id': 'com.camunda.example.ExecutionListenerInvalidType',
  'appliesTo': [
    'bpmn:Task'
  ],
  'entriesVisible': {
    'executionListeners': false
  },
  'properties': [
    {
      'type': 'String',
      'value': 'my-listener-type',
      'binding': {
        'type': 'zeebe:executionListener',
        'eventType': 'start'
      }
    }
  ]
};

export const errors = [
  {
    keyword: 'const',
    dataPath: '/properties/0/type',
    schemaPath: '#/allOf/1/items/allOf/29/then/properties/type/const',
    params: {
      allowedValue: 'Hidden'
    },
    message: 'should be equal to constant'
  },
  {
    keyword: 'if',
    dataPath: '/properties/0',
    schemaPath: '#/allOf/1/items/allOf/29/if',
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
