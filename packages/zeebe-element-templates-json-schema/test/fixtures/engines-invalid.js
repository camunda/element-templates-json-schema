export const template = {
  'name': 'Engines Invalid',
  'id': 'foo',
  'appliesTo': [
    'bpmn:Task'
  ],
  'engines': '8.5',
  'properties': [],
};

export const errors = [
  {
    dataPath: '/engines',
    keyword: 'type',
    message: 'should be object',
    params: {
      type: 'object'
    },
    schemaPath: '#/properties/engines/type'
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
