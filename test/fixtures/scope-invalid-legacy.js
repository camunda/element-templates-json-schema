export const template = {
  'name': 'ConnectorGetTask',
  'id': 'my.connector.http.get.Task',
  'appliesTo': [
    'bpmn:Task'
  ],
  'properties': [],
  'scopes': {
    'foo': {
      'properties': []
    }
  }
};

export const errors = [
  {
    keyword: 'errorMessage',
    dataPath: '/scopes',
    schemaPath: '#/errorMessage',
    params: {
      errors: [
        {
          keyword: 'additionalProperties',
          emUsed: true,
          dataPath: '/scopes',
          schemaPath: '#/additionalProperties',
          params: {
            'additionalProperty': 'foo'
          },
          message: 'should NOT have additional properties'
        }
      ]
    },
    message: 'invalid scope, object descriptor is only supported for camunda:Connector'
  },
  {
    keyword: 'type',
    dataPath: '/scopes',
    message: 'should be array',
    params: {
      type: 'array'
    },
    schemaPath: '#/type'
  },
  {
    keyword: 'oneOf',
    dataPath: '/scopes',
    message: 'should match exactly one schema in oneOf',
    params: {
      passingSchemas: null
    },
    schemaPath: '#/properties/scopes/oneOf'
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
