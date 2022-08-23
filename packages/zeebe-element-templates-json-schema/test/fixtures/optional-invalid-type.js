export const template = {
  'name': 'REST Connector',
  'id': 'io.camunda.connectors.RestConnector-s1',
  'description': 'A generic REST service.',
  'appliesTo': [
    'bpmn:ServiceTask'
  ],
  'properties': [
    {
      'label': 'Request Body',
      'type': 'String',
      'optional': true,
      'binding': {
        'type': 'zeebe:input',
        'name': 'body'
      }
    },
    {
      'label': 'Result Variable',
      'type': 'String',
      'optional': true,
      'binding': {
        'type': 'zeebe:taskHeader',
        'key': 'key'
      }
    }
  ]
};

export const errors = [
  {
    keyword: 'errorMessage',
    dataPath: '/properties/1/binding/type',
    schemaPath: '#/definitions/properties/allOf/1/items/allOf/2/then/properties/binding/properties/type/errorMessage',
    params: {
      errors: [
        {
          keyword: 'enum',
          dataPath: '/properties/1/binding/type',
          schemaPath: '#/definitions/properties/allOf/1/items/allOf/2/then/properties/binding/properties/type/enum',
          params: {
            allowedValues: [
              'zeebe:input',
              'zeebe:output',
              'zeebe:property'
            ]
          },
          message: 'should be equal to one of the allowed values',
          emUsed: true
        }
      ]
    },
    message: 'optional is not supported for binding type "zeebe:taskHeader"; must be any of { zeebe:input, zeebe:output, zeebe:property }'
  },
  {
    keyword: 'if',
    dataPath: '/properties/1',
    schemaPath: '#/definitions/properties/allOf/1/items/allOf/2/if',
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