export const template = {
  'name': 'test',
  'id': 'test',
  'appliesTo': [
    'bpmn:Task'
  ],
  'entriesVisible': {
    'taskListeners': true
  },
  'elementType': {
    'value': 'bpmn:UserTask'
  },
  'properties': [
    {
      'type': 'Hidden',
      'value': 'my-listener-type',
      'binding': {
        'type': 'zeebe:taskListener',
        'eventType': 'assigning'
      }
    }
  ]
};

export const errors = [
  {
    keyword: 'const',
    dataPath: '/entriesVisible/taskListeners',
    schemaPath: '#/allOf/1/allOf/13/allOf/2/then/properties/entriesVisible/properties/taskListeners/const',
    params: {
      allowedValue: false
    },
    message: 'should be equal to constant'
  },
  {
    keyword: 'if',
    dataPath: '',
    schemaPath: '#/allOf/1/allOf/13/allOf/2/if',
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
