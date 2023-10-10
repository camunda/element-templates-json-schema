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
    dataPath: '/properties/0/binding/implementationType',
    keyword: 'enum',
    message: 'should be equal to one of the allowed values',
    params: {
      allowedValues: [
        'class',
        'delegateExpression',
        'expression',
        'script'
      ]
    },
    schemaPath: '#/allOf/1/items/allOf/1/then/properties/binding/properties/implementationType/enum'
  },
  {
    dataPath: '/properties/0',
    keyword: 'if',
    message: 'should match "then" schema',
    params: {
      failingKeyword: 'then'
    },
    schemaPath: '#/allOf/1/items/allOf/1/if'
  },
  {
    dataPath: '/properties/1/binding',
    keyword: 'oneOf',
    message: 'should match exactly one schema in oneOf',
    params: {
      passingSchemas: [
        0,
        1
      ]
    },
    schemaPath: '#/allOf/1/items/allOf/1/then/properties/binding/oneOf'
  },
  {
    dataPath: '/properties/1',
    keyword: 'if',
    message: 'should match "then" schema',
    params: {
      failingKeyword: 'then',
    },
    schemaPath: '#/allOf/1/items/allOf/1/if'
  },
  {
    dataPath: '/properties/2/binding',
    keyword: 'not',
    message: 'should NOT be valid',
    params: {},
    schemaPath: '#/allOf/1/items/allOf/1/then/properties/binding/oneOf/0/not'
  },
  {
    dataPath: '/properties/2/binding',
    keyword: 'required',
    message: "should have required property 'scriptFormat'",
    params: {
      missingProperty: 'scriptFormat'
    },
    schemaPath: '#/allOf/1/items/allOf/1/then/properties/binding/oneOf/1/required'
  },
  {
    dataPath: '/properties/2/binding',
    keyword: 'not',
    message: 'should NOT be valid',
    params: {},
    schemaPath: '#/allOf/1/items/allOf/1/then/properties/binding/oneOf/2/allOf/0/not'
  },
  {
    dataPath: '/properties/2/binding',
    keyword: 'oneOf',
    message: 'should match exactly one schema in oneOf',
    params: {
      passingSchemas: null
    },
    schemaPath: '#/allOf/1/items/allOf/1/then/properties/binding/oneOf'
  },
  {
    dataPath: '/properties/2',
    keyword: 'if',
    message: 'should match "then" schema',
    params: {
      failingKeyword: 'then'
    },
    schemaPath: '#/allOf/1/items/allOf/1/if'
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
