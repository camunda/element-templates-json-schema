export const template = {
  'name': 'InvalidExecutionListenerType',
  'id': 'com.camunda.example.InvalidExecutionListenerType',
  'appliesTo': [
    'bpmn:Task'
  ],
  'properties': [
    {
      'label': 'foo',
      'type': 'Hidden',
      'binding': {
        'type': 'camunda:executionListener',
        'implementationType': 'expression'
      }
    },
    {
      'label': 'foo',
      'binding': {
        'type': 'camunda:executionListener',
        'implementationType': 'expression'
      }
    },
    {
      'label': 'bar',
      'type': 'String',
      'binding': {
        'type': 'camunda:executionListener',
        'implementationType': 'expression'
      }
    }
  ]
};

export const errors = [
  {
    keyword: 'errorMessage',
    dataPath: '/properties/2/type',
    schemaPath: '#/definitions/properties/allOf/1/items/allOf/1/then/properties/type/errorMessage',
    params: {
      errors: [
        {
          keyword: 'enum',
          dataPath: '/properties/2/type',
          schemaPath: '#/definitions/properties/allOf/1/items/allOf/1/then/properties/type/enum',
          params: {
            allowedValues: [
              'Hidden'
            ]
          },
          message: 'should be equal to one of the allowed values',
          emUsed: true
        }
      ]
    },
    message: 'invalid property type "String" for binding type "camunda:executionListener"; must be "Hidden"'
  },
  {
    keyword: 'if',
    dataPath: '/properties/2',
    schemaPath: '#/definitions/properties/allOf/1/items/allOf/1/if',
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
