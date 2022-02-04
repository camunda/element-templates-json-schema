export const template = {
  'name': 'Invalid',
  'id': 'foo',
  'properties': [],
  'appliesTo': 'bpmn:Task'
};

export const errors = [
  {
    keyword: 'type',
    dataPath: '/appliesTo',
    schemaPath: '#/allOf/0/properties/appliesTo/type',
    params: { type: 'array' },
    message: 'should be array'
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
