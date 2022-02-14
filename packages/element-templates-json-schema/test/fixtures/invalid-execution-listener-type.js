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
        'type': 'camunda:executionListener'
      }
    },
    {
      'label': 'foo',
      'binding': {
        'type': 'camunda:executionListener'
      }
    },
    {
      'label': 'bar',
      'type': 'String',
      'binding': {
        'type': 'camunda:executionListener'
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
          emUsed: true,
          dataPath: '/properties/2/type',
          schemaPath: '#/definitions/properties/allOf/1/items/allOf/1/then/properties/type/enum',
          params: {
            'allowedValues': [
              'Hidden'
            ]
          },
          message: 'should be equal to one of the allowed values'
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
      'failingKeyword': 'then'
    },
    message: 'should match "then" schema'
  },
  {
    dataPath: '',
    keyword: 'type',
    message: 'should be array',
    params: {
      type: 'array',
    },
    schemaPath: '#/oneOf/1/type',
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
