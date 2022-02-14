export const template = {
  'name': 'Custom ServiceTask',
  'id': 'my.custom.ServiceTask',
  'appliesTo': [
    'bpmn:ServiceTask'
  ],
  'properties': [],
  'entriesVisible': {
    '_all': true,
    'invisible': false
  }
};

export const errors = [
  {
    keyword: 'type',
    dataPath: '/entriesVisible',
    schemaPath: '#/allOf/0/properties/entriesVisible/type',
    params: { type: 'boolean' },
    message: 'should be boolean'
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
