export const template = {
  'name': 'InvalidExecutionListenerImplementationType',
  'id': 'com.camunda.example.InvalidExecutionListenerImplementationType',
  'appliesTo': [
    'bpmn:Task'
  ],
  'properties': [
    {
      'label': 'unknown implementation type',
      'binding': {
        'type': 'camunda:executionListener',
        'implementationType': 'unknown'
      }
    },
    {
      'label': 'script format only allowed with scripts',
      'binding': {
        'type': 'camunda:executionListener',
        'implementationType': 'class',
        'scriptFormat': 'js'
      }
    },
    {
      'label': 'implementation type of script requires scriptFormat',
      'binding': {
        'type': 'camunda:executionListener',
        'implementationType': 'script'
      }
    }
  ]
};

export const errors = [
  {
    keyword: 'enum',
    dataPath: '/properties/0/binding/implementationType',
    schemaPath: '#/definitions/properties/allOf/1/items/allOf/1/then/properties/binding/properties/implementationType/enum',
    params: {
      allowedValues: [
        'class',
        'delegateExpression',
        'expression',
        'script'
      ]
    },
    message: 'should be equal to one of the allowed values'
  },
  {
    keyword: 'if',
    dataPath: '/properties/0',
    schemaPath: '#/definitions/properties/allOf/1/items/allOf/1/if',
    params: {
      failingKeyword: 'then'
    },
    message: 'should match "then" schema'
  },
  {
    keyword: 'oneOf',
    dataPath: '/properties/1/binding',
    schemaPath: '#/definitions/properties/allOf/1/items/allOf/1/then/properties/binding/oneOf',
    params: {
      passingSchemas: [
        0,
        1
      ]
    },
    message: 'should match exactly one schema in oneOf'
  },
  {
    keyword: 'if',
    dataPath: '/properties/1',
    schemaPath: '#/definitions/properties/allOf/1/items/allOf/1/if',
    params: {
      failingKeyword: 'then'
    },
    message: 'should match "then" schema'
  },
  {
    keyword: 'not',
    dataPath: '/properties/2/binding',
    schemaPath: '#/definitions/properties/allOf/1/items/allOf/1/then/properties/binding/oneOf/0/not',
    params: {},
    message: 'should NOT be valid'
  },
  {
    keyword: 'required',
    dataPath: '/properties/2/binding',
    schemaPath: '#/definitions/properties/allOf/1/items/allOf/1/then/properties/binding/oneOf/1/required',
    params: {
      missingProperty: 'scriptFormat'
    },
    message: 'should have required property \'scriptFormat\''
  },
  {
    keyword: 'not',
    dataPath: '/properties/2/binding',
    schemaPath: '#/definitions/properties/allOf/1/items/allOf/1/then/properties/binding/oneOf/2/allOf/0/not',
    params: {},
    message: 'should NOT be valid'
  },
  {
    keyword: 'oneOf',
    dataPath: '/properties/2/binding',
    schemaPath: '#/definitions/properties/allOf/1/items/allOf/1/then/properties/binding/oneOf',
    params: {
      passingSchemas: null
    },
    message: 'should match exactly one schema in oneOf'
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
