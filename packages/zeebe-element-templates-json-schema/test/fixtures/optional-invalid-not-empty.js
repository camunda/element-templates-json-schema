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
      },
      'constraints': {
        'notEmpty': false
      }
    },
    {
      'label': 'Result Variable',
      'type': 'String',
      'optional': true,
      'binding': {
        'type': 'zeebe:input',
        'name': 'key'
      },
      'constraints': {
        'notEmpty': true
      }
    },
    {
      'label': 'foo',
      'type': 'String',
      'optional': true,
      'binding': {
        'type': 'zeebe:input',
        'name': 'body'
      }
    },
    {
      'label': 'bar',
      'type': 'String',
      'optional': false,
      'binding': {
        'type': 'zeebe:input',
        'name': 'body'
      },
      'constraints': {
        'notEmpty': true
      }
    }
  ]
};

export const errors = [
  {
    keyword: 'errorMessage',
    dataPath: '/properties/1/constraints/notEmpty',
    schemaPath: '#/definitions/properties/allOf/1/items/allOf/3/then/properties/constraints/properties/notEmpty/errorMessage',
    params: {
      errors: [
        {
          keyword: 'const',
          dataPath: '/properties/1/constraints/notEmpty',
          schemaPath: '#/definitions/properties/allOf/1/items/allOf/3/then/properties/constraints/properties/notEmpty/const',
          params: { allowedValue: false },
          message: 'should be equal to constant',
          emUsed: true
        }
      ]
    },
    message: 'optional is not allowed for truthy "notEmpty" constraint'
  },
  {
    keyword: 'if',
    dataPath: '/properties/1',
    schemaPath: '#/definitions/properties/allOf/1/items/allOf/3/if',
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