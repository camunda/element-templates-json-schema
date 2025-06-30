export const template = {
  'name': 'Activation condition',
  'id': 'com.camunda.example.activationCondition',
  'appliesTo': [
    'bpmn:ComplexGateway',
  ],
  'properties': [
    {
      'binding': {
        'type': 'property',
        'name': 'activationCondition'
      }
    }
  ]
};

export const errors = [
  {
    keyword: 'required',
    dataPath: '/properties/0',
    schemaPath: '#/allOf/2/allOf/2/then/properties/properties/items/then/required',
    params: {
      missingProperty: 'feel'
    },
    message: "should have required property 'feel'"
  },
  {
    keyword: 'if',
    dataPath: '/properties/0',
    schemaPath: '#/allOf/2/allOf/2/then/properties/properties/items/if',
    params: {
      failingKeyword: 'then'
    },
    message: 'should match "then" schema'
  },
  {
    keyword: 'if',
    dataPath: '',
    schemaPath: '#/allOf/2/allOf/2/if',
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