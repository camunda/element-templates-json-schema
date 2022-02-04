export const template = {
  name: 'ConnectorGetTask',
  id: 'my.connector.http.get.Task',
  appliesTo: [
    'bpmn:Task'
  ],
  properties: [],
  scopes: [
    {
      type: 'camunda:Connector',
      properties: [
        {
          label: 'ConnectorId',
          type: 'String',
          value: 'My Connector HTTP - GET'
        }
      ]
    }
  ]
};

export const errors = [
  {
    keyword: 'errorMessage',
    dataPath: '/scopes/0/properties/0',
    schemaPath: '#/definitions/properties/allOf/1/items/errorMessage',
    params: {
      errors: [
        {
          keyword: 'required',
          dataPath: '/scopes/0/properties/0',
          schemaPath: '#/definitions/properties/allOf/1/items/required',
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
