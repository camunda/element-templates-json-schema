export const template = {
  'name': 'Invalid configurationTemplateVersion',
  'id': 'io.camunda.example.InvalidConfigurationTemplateVersion',
  'appliesTo': [
    'bpmn:ServiceTask'
  ],
  'properties': [
    {
      'type': 'Configuration',
      'configurationTemplate': 'io.camunda:aws-credential:1',
      'configurationTemplateVersion': '2',
      'binding': {
        'type': 'zeebe:input',
        'name': 'auth'
      }
    }
  ]
};

export const errors = [
  {
    keyword: 'type',
    dataPath: '/properties/0/configurationTemplateVersion',
    schemaPath: '#/allOf/1/items/allOf/34/then/properties/configurationTemplateVersion/type',
    params: { type: 'integer' },
    message: 'should be integer'
  },
  {
    keyword: 'if',
    dataPath: '/properties/0',
    schemaPath: '#/allOf/1/items/allOf/34/if',
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
