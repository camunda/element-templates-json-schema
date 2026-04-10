export const template = {
  'name': 'ListenerPropertiesOnNonListener',
  'id': 'com.camunda.example.ListenerPropertiesOnNonListener',
  'appliesTo': [
    'bpmn:Task'
  ],
  'properties': [
    {
      'type': 'String',
      'value': 'my-value',
      'binding': {
        'type': 'zeebe:input',
        'name': 'input',
        'eventType': 'start'
      }
    }
  ]
};

export const errors = [
  {
    keyword: 'not',
    dataPath: '/properties/0/binding',
    schemaPath: '#/allOf/1/items/properties/binding/allOf/16/allOf/3/then/not',
    params: {},
    message: 'should NOT be valid'
  },
  {
    keyword: 'if',
    dataPath: '/properties/0/binding',
    schemaPath: '#/allOf/1/items/properties/binding/allOf/16/allOf/3/if',
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
