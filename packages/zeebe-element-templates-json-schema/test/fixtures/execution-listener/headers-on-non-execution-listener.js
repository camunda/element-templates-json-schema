export const template = {
  'name': 'HeadersOnNonExecutionListener',
  'id': 'com.camunda.example.HeadersOnNonExecutionListener',
  'appliesTo': [
    'bpmn:UserTask'
  ],
  'properties': [
    {
      'type': 'Hidden',
      'value': 'my-listener-type',
      'binding': {
        'type': 'zeebe:taskListener',
        'eventType': 'completing',
        'headers': [
          { 'key': 'foo', 'value': 'bar' }
        ]
      }
    }
  ]
};

export const errors = [
  {
    keyword: 'const',
    dataPath: '/properties/0/binding/type',
    schemaPath: '#/allOf/1/items/properties/binding/allOf/16/allOf/2/then/properties/type/const',
    params: {
      allowedValue: 'zeebe:executionListener'
    },
    message: 'should be equal to constant'
  },
  {
    keyword: 'if',
    dataPath: '/properties/0/binding',
    schemaPath: '#/allOf/1/items/properties/binding/allOf/16/allOf/2/if',
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
