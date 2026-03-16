export const template = {
  'name': 'TaskListenerInvalidElementType',
  'id': 'com.camunda.example.TaskListenerInvalidElementType',
  'appliesTo': [
    'bpmn:Task'
  ],
  'elementType': {
    'value': 'bpmn:ServiceTask'
  },
  'properties': [
    {
      'type': 'Hidden',
      'value': 'my-listener-type',
      'binding': {
        'type': 'zeebe:taskListener',
        'eventType': 'completing'
      }
    }
  ]
};

// task listeners require elementType.value = bpmn:UserTask or appliesTo = ["bpmn:UserTask"]
export const errors = [
  {
    keyword: 'const',
    dataPath: '/elementType/value',
    schemaPath: '#/allOf/1/allOf/13/allOf/0/then/anyOf/0/properties/elementType/properties/value/const',
    params: {
      allowedValue: 'bpmn:UserTask'
    },
    message: 'should be equal to constant'
  },
  {
    keyword: 'const',
    dataPath: '/appliesTo',
    schemaPath: '#/allOf/1/allOf/13/allOf/0/then/anyOf/1/properties/appliesTo/const',
    params: {
      allowedValue: [
        'bpmn:UserTask'
      ]
    },
    message: 'should be equal to constant'
  },
  {
    keyword: 'anyOf',
    dataPath: '',
    schemaPath: '#/allOf/1/allOf/13/allOf/0/then/anyOf',
    params: {},
    message: 'should match some schema in anyOf'
  },
  {
    keyword: 'if',
    dataPath: '',
    schemaPath: '#/allOf/1/allOf/13/allOf/0/if',
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
