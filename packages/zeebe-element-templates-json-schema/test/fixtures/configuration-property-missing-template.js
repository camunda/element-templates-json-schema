export const template = {
  'name': 'Missing configurationTemplate',
  'id': 'io.camunda.example.MissingConfigurationTemplate',
  'appliesTo': [
    'bpmn:ServiceTask'
  ],
  'properties': [
    {
      'type': 'Configuration',
      'binding': {
        'type': 'zeebe:input',
        'name': 'auth'
      }
    }
  ]
};

export const errors = [
  {
    keyword: 'required',
    dataPath: '/properties/0',
    schemaPath: '#/allOf/1/items/allOf/33/then/required',
    params: { missingProperty: 'configurationTemplate' },
    message: "should have required property 'configurationTemplate'"
  },
  {
    keyword: 'if',
    dataPath: '/properties/0',
    schemaPath: '#/allOf/1/items/allOf/33/if',
    params: { failingKeyword: 'then' },
    message: 'should match "then" schema'
  },
  {
    keyword: 'type',
    dataPath: '',
    schemaPath: '#/oneOf/1/type',
    params: { type: 'array' },
    message: 'should be array'
  },
  {
    keyword: 'oneOf',
    dataPath: '',
    schemaPath: '#/oneOf',
    params: { passingSchemas: null },
    message: 'should match exactly one schema in oneOf'
  }
];
