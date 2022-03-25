export const template = {
  'name': 'Invalid',
  'id': 'foo',
  'properties': [],
  'appliesTo': [ 'Task' ]
};

export const errors = [
  {
    keyword: 'errorMessage',
    dataPath: '/appliesTo/0',
    schemaPath: '#/allOf/0/properties/appliesTo/items/errorMessage',
    params: {
      errors: [
        {
          keyword: 'pattern',
          dataPath: '/appliesTo/0',
          schemaPath: '#/allOf/0/properties/appliesTo/items/pattern',
          params: { pattern: '^[\\w\\d]+:[\\w\\d]+$' },
          message: 'should match pattern "^[\\w\\d]+:[\\w\\d]+$"',
          emUsed: true
        }
      ]
    },
    message: 'invalid item for "appliesTo", should contain namespaced property, example: "bpmn:Task"'
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