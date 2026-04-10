export const template = {
  'name': 'ExecutionListenerInvalidHeaders',
  'id': 'com.camunda.example.ExecutionListenerInvalidHeaders',
  'appliesTo': [
    'bpmn:Task'
  ],
  'entriesVisible': {
    'executionListeners': false
  },
  'properties': [
    {
      'type': 'Hidden',
      'value': 'my-listener-type',
      'binding': {
        'type': 'zeebe:executionListener',
        'eventType': 'start',
        'headers': [
          { 'key': 'valid', 'value': 'header' },
          { 'key': 'missing-value' }
        ]
      }
    }
  ]
};

export const errors = [
  {
    keyword: 'required',
    dataPath: '/properties/0/binding/headers/1',
    schemaPath: '#/allOf/1/items/properties/binding/properties/headers/items/required',
    params: {
      missingProperty: 'value'
    },
    message: 'should have required property \'value\''
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
