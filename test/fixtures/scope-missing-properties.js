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
    keyword: 'errorMessage',
    dataPath: '/scopes/0',
    schemaPath: '#/properties/scopes/items/errorMessage',
    params: {
      errors: [
        {
          keyword: 'required',
          dataPath: '/scopes/0',
          schemaPath: '#/properties/scopes/items/required',
          params: { missingProperty: 'properties' },
          message: "should have required property 'properties'",
          emUsed: true
        }
      ]
    },
    message: 'invalid scope "camunda:Connector", missing properties=[]'
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