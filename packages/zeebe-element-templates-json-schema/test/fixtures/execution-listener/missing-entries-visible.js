export const template = {
  'name': 'ExecutionListenerMissingEntriesVisible',
  'id': 'com.camunda.example.ExecutionListenerMissingEntriesVisible',
  'appliesTo': [
    'bpmn:Task'
  ],
  'properties': [
    {
      'type': 'Hidden',
      'value': 'my-listener-type',
      'binding': {
        'type': 'zeebe:executionListener',
        'eventType': 'start'
      }
    }
  ]
};

// entriesVisible with executionListeners: false is required when using zeebe:executionListener
export const errors = [
  {
    keyword: 'required',
    dataPath: '',
    schemaPath: '#/allOf/1/allOf/13/allOf/1/then/required',
    params: {
      missingProperty: 'entriesVisible'
    },
    message: "should have required property 'entriesVisible'"
  },
  {
    keyword: 'if',
    dataPath: '',
    schemaPath: '#/allOf/1/allOf/13/allOf/1/if',
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
