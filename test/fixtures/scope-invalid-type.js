export const template = {
  name: 'Task',
  id: 'my.Task.template',
  appliesTo: [
    'bpmn:Task'
  ],
  properties: [],
  scopes: [
    {
      type: 'foo',
      properties: []
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
    keyword: 'errorMessage',
    dataPath: '/scopes/0/type',
    schemaPath: '#/items/properties/type/errorMessage',
    params: {
      errors: [
        {
          keyword: 'enum',
          dataPath: '/scopes/0/type',
          schemaPath: '#/items/properties/type/enum',
          params: { allowedValues: [ 'camunda:Connector', 'bpmn:Error' ] },
          message: 'should be equal to one of the allowed values'
        }
      ]
    },
    message: 'invalid scope type "foo"; must be any of { camunda:Connector, bpmn:Error }'
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