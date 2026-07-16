export const template = {
  'name': 'Invalid Configuration binding',
  'id': 'io.camunda.example.InvalidConfigurationBinding',
  'appliesTo': [
    'bpmn:ServiceTask'
  ],
  'properties': [
    {
      'type': 'Configuration',
      'configurationTemplate': 'io.camunda:aws-credential:1',
      'binding': {
        'type': 'zeebe:output',
        'source': '=auth'
      }
    }
  ]
};

export const errors = [
  {
    keyword: 'enum',
    dataPath: '/properties/0/binding/type',
    schemaPath: '#/allOf/1/items/allOf/34/then/properties/binding/properties/type/enum',
    params: { allowedValues: [ 'zeebe:input', 'zeebe:property' ] },
    message: 'should be equal to one of the allowed values'
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
