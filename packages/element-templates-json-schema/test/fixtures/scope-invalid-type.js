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
    keyword: 'errorMessage',
    dataPath: '/scopes/0/type',
    schemaPath: '#/properties/scopes/items/properties/type/errorMessage',
    params: {
      errors: [
        {
          keyword: 'enum',
          dataPath: '/scopes/0/type',
          schemaPath: '#/properties/scopes/items/properties/type/enum',
          emUsed: true,
          params: { allowedValues: [ 'camunda:Connector', 'bpmn:Error' ] },
          message: 'should be equal to one of the allowed values'
        }
      ]
    },
    message: 'invalid scope type "foo"; must be any of { camunda:Connector, bpmn:Error }'
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