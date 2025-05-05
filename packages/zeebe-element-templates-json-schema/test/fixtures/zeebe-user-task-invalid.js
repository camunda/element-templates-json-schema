export const template = {
  'name': 'ZeebeUserTaskInvalid',
  'id': 'com.camunda.example.ZeebeUserTask.Invalid',
  'appliesTo': [
    'bpmn:Task'
  ],
  'elementType': {
    'value': 'bpmn:IntermediateCatchEvent'
  },
  'properties': [
    {
      'type': 'String',
      'binding': {
        'type': 'zeebe:userTask',
      }
    }
  ]
};

export const errors = [
  {
    dataPath: '/elementType/value',
    keyword: 'const',
    message: 'should be equal to constant',
    params: {
      allowedValue: 'bpmn:UserTask'
    },
    schemaPath: '#/allOf/1/allOf/3/then/properties/elementType/properties/value/const'
  },
  {
    dataPath: '',
    keyword: 'if',
    message: 'should match "then" schema',
    params: {
      failingKeyword: 'then'
    },
    schemaPath: '#/allOf/1/allOf/3/if'
  },
  {
    dataPath: '/properties/0/type',
    keyword: 'enum',
    message: 'should be equal to one of the allowed values',
    params: {
      allowedValues: [
        'Hidden'
      ]
    },
    schemaPath: '#/allOf/1/items/allOf/12/then/properties/type/enum'
  },
  {
    dataPath: '/properties/0',
    keyword: 'if',
    message: 'should match "then" schema',
    params: {
      failingKeyword: 'then'
    },
    schemaPath: '#/allOf/1/items/allOf/12/if'
  },
  {
    dataPath: '',
    keyword: 'type',
    message: 'should be array',
    params: {
      type: 'array'
    },
    schemaPath: '#/oneOf/1/type'
  },
  {
    dataPath: '',
    keyword: 'oneOf',
    message: 'should match exactly one schema in oneOf',
    params: {
      passingSchemas: null
    },
    schemaPath: '#/oneOf'
  }
];