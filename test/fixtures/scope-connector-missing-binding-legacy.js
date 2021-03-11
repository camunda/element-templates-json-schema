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
    keyword: 'required',
    dataPath: '/scopes/camunda:Connector/properties/0',
    schemaPath: '#/definitions/properties/items/required',
    params: { missingProperty: 'binding' },
    message: "should have required property 'binding'"
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
