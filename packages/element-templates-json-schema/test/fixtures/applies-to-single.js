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
    params: {
      type: 'array'
    },
    message: 'should be array'
  },
  {
    keyword: 'type',
    dataPath: '',
    schemaPath: '#/oneOf/1/type',
    params: {
      type: 'array'
    },
    message: 'should be array'
  },
  {
    keyword: 'oneOf',
    dataPath: '',
    schemaPath: '#/oneOf',
    params: {
      passingSchemas: null
    },
    message: 'should match exactly one schema in oneOf'
  }
];
