export const template = {
  'name': 'ConnectorGetTask',
  'id': 'my.connector.http.get.Task',
  'appliesTo': [
    'bpmn:Task'
  ],
  'properties': [],
  'scopes': {
    'camunda:Connector': {
      'properties': [
        {
          'label': 'ConnectorId',
          'type': 'String',
          'value': 'My Connector HTTP - GET'
        }
      ]
    }
  }
};

export const errors = [
  {
    keyword: 'errorMessage',
    dataPath: '/scopes/camunda:Connector/properties/0',
    schemaPath: '#/definitions/properties/items/errorMessage',
    params: {
      errors: [
        {
          keyword: 'required',
          dataPath: '/scopes/camunda:Connector/properties/0',
          schemaPath: '#/definitions/properties/items/required',
          params: { missingProperty: 'binding' },
          message: "should have required property 'binding'",
          emUsed: true
        }
      ]
    },
    message: 'missing binding for property "0"'
  },
  {
    keyword: 'type',
    dataPath: '/scopes',
    schemaPath: '#/type',
    params: { type: 'array' },
    message: 'should be array'
  },
  {
    keyword: 'oneOf',
    dataPath: '/scopes',
    schemaPath: '#/properties/scopes/oneOf',
    params: { passingSchemas: null },
    message: 'should match exactly one schema in oneOf'
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
