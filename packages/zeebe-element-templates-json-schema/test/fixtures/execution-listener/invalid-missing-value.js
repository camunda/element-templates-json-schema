export const template = {
  'name': 'ExecutionListener',
  'id': 'com.camunda.example.ExecutionListener',
  'appliesTo': [
    'bpmn:Task'
  ],
  'entriesVisible': {
    'executionListeners': false
  },
  'properties': [
    {
      'type': 'Hidden',
      'binding': {
        'type': 'zeebe:executionListener',
        'eventType': 'start'
      }
    }
  ]
};

export const errors = [
  {
    keyword: 'required',
    dataPath: '/properties/0',
    schemaPath: '#/allOf/1/items/allOf/29/then/anyOf/0/required',
    params: {
      missingProperty: 'value'
    },
    message: 'should have required property \'value\''
  },
  {
    keyword: 'required',
    dataPath: '/properties/0',
    schemaPath: '#/allOf/1/items/allOf/29/then/anyOf/1/required',
    params: {
      missingProperty: 'generatedValue'
    },
    message: 'should have required property \'generatedValue\''
  },
  {
    keyword: 'anyOf',
    dataPath: '/properties/0',
    schemaPath: '#/allOf/1/items/allOf/29/then/anyOf',
    params: {},
    message: 'should match some schema in anyOf'
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
