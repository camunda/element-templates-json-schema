export const template = {
  name: 'Task',
  id: 'my.Task.template',
  appliesTo: [
    'bpmn:Task'
  ],
  properties: [],
  scopes: [
    {
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
    dataPath: '/scopes/0',
    schemaPath: '#/items/errorMessage',
    params: {
      errors: [
        {
          keyword: 'required',
          dataPath: '/scopes/0',
          schemaPath: '#/items/required',
          params: { missingProperty: 'type' },
          message: "should have required property 'type'",
          emUsed: true
        }
      ]
    },
    message: 'invalid scope, missing type'
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