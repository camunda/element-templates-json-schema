export const template = {
  'name': 'Custom ServiceTask',
  'id': 'my.custom.ServiceTask',
  'appliesTo': [
    'bpmn:ServiceTask'
  ],
  'properties': [],
  'entriesVisible': {
    'foo': true
  }
};

export const errors = [
  {
    keyword: 'type',
    dataPath: '/entriesVisible',
    schemaPath: '#/properties/entriesVisible/oneOf/0/type',
    params: {
      type: 'boolean'
    },
    message: 'should be boolean'
  },
  {
    keyword: 'additionalProperties',
    dataPath: '/entriesVisible',
    schemaPath: '#/properties/entriesVisible/oneOf/1/additionalProperties',
    params: {
      additionalProperty: 'foo'
    },
    message: 'should NOT have additional properties'
  },
  {
    keyword: 'oneOf',
    dataPath: '/entriesVisible',
    schemaPath: '#/properties/entriesVisible/oneOf',
    params: {
      passingSchemas: null
    },
    message: 'should match exactly one schema in oneOf'
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
