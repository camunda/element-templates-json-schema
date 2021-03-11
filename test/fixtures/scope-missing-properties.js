export const template = {
  name: 'ConnectorGetTask',
  id: 'my.connector.http.get.Task',
  appliesTo: [
    'bpmn:Task'
  ],
  properties: [],
  scopes: [
    {
      type: 'camunda:Connector'
    }
  ]
};

export const errors = [
  {
    keyword: 'type',
    dataPath: '/scopes',
    schemaPath: '#/type',
    params: { type: 'object' },
    message: 'should be object'
  },
  {
    keyword: 'required',
    dataPath: '/scopes/0',
    schemaPath: '#/items/required',
    params: { missingProperty: 'properties' },
    message: "should have required property 'properties'"
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