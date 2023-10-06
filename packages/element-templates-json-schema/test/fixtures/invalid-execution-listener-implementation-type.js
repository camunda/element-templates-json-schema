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
    dataPath: "/properties/0/binding/implementationType",
    keyword: "enum",
    message: "should be equal to one of the allowed values",
    params: {
      allowedValues: [
        "class",
        "delegateExpression",
        "expression",
        "script"
      ]
    },
    schemaPath: "#/allOf/1/items/allOf/1/then/properties/binding/properties/implementationType/enum"
  },
  {
    dataPath: "/properties/0",
    keyword: "if",
    message: "should match \"then\" schema",
    params: {
      failingKeyword: "then"
    },
    schemaPath: "#/allOf/1/items/allOf/1/if"
  },
  {
    dataPath: '/properties/1/binding',
    message: "should match exactly one schema in oneOf",
  },
  {
    dataPath: '/properties/1',
    message: "should match \"then\" schema",
  },
  {
    dataPath: '/properties/2/binding',
    message: "should NOT be valid",
  },
  {
    dataPath: '/properties/2/binding',
    message: "should have required property 'scriptFormat'",
  },
  {
    dataPath: '/properties/2/binding',
    message: "should match exactly one schema in oneOf",
  },  
  {
    dataPath: '/properties/2',
    message: "should match \"then\" schema",
  }
];
