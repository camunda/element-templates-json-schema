export const template = {
  'name': 'TaskListenerMissingEventType',
  'id': 'com.camunda.example.TaskListenerMissingEventType',
  'appliesTo': [
    'bpmn:UserTask'
  ],
  'properties': [
    {
      'type': 'Hidden',
      'value': 'my-listener-type',
      'binding': {
        'type': 'zeebe:taskListener'
      }
    }
  ]
};

export const errors = [
  {
    keyword: 'required',
    dataPath: '/properties/0/binding',
    schemaPath: '#/allOf/1/items/properties/binding/allOf/16/allOf/1/then/required',
    params: {
      missingProperty: 'eventType'
    },
    message: "should have required property 'eventType'"
  },
  {
    keyword: 'if',
    dataPath: '/properties/0/binding',
    schemaPath: '#/allOf/1/items/properties/binding/allOf/16/allOf/1/if',
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
