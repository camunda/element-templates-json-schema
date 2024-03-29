export const template = {
  name: 'ConnectorGetTask',
  id: 'my.connector.http.get.Task',
  appliesTo: [
    'bpmn:Task'
  ],
  properties: [],
  scopes: {
    'camunda:Connector': {
      properties: [
        {
          label: 'ConnectorId',
          type: 'String',
          value: 'My Connector HTTP - GET',
          binding: {
            type: 'property',
            name: 'connectorId'
          }
        },
        {
          label: 'Method',
          type: 'String',
          value: 'GET',
          binding: {
            type: 'camunda:inputParameter',
            name: 'method'
          }
        },
        {
          label: 'URL',
          type: 'String',
          value: 'https://bpmn.io',
          binding: {
            type: 'camunda:inputParameter',
            name: 'url'
          }
        },
        {
          label: 'Response',
          type: 'String',
          value: 'wsResponse',
          binding: {
            type: 'camunda:outputParameter',
            source: '${S(response)}',
            scriptFormat: 'freemarker'
          }
        }
      ]
    }
  }
};

export const errors = [
  {
    keyword: 'type',
    dataPath: '/scopes',
    schemaPath: '#/properties/scopes/type',
    params: { type: 'array' },
    message: 'should be array'
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
