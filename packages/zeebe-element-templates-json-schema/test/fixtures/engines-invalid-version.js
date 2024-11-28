export const template = {
  'name': 'Engines Invalid Versions',
  'id': 'foo',
  'appliesTo': [
    'bpmn:Task'
  ],
  'engines': {
    'camunda': [ '8.5' ],
  },
  'properties': [],
};

export const errors = [
  {
    dataPath: '/engines/camunda',
    keyword: 'type',
    message: 'should be string',
    params: {
      type: 'string'
    },
    schemaPath: '#/properties/engines/properties/camunda/type'
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
