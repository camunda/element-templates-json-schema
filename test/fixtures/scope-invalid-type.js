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
    keyword: 'pattern',
    dataPath: '/scopes/0/type',
    schemaPath: '#/items/properties/type/pattern',
    params: { pattern: '^(camunda|bpmn):' },
    message: 'should match pattern "^(camunda|bpmn):"'
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