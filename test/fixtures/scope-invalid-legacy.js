export const template = {
  'name': 'ConnectorGetTask',
  'id': 'my.connector.http.get.Task',
  'appliesTo': [
    'bpmn:Task'
  ],
  'properties': [],
  'scopes': {
    'foo': {
      'properties': []
    }
  }
};

export const errors = [
  {
    keyword: 'type',
    dataPath: '/scopes',
    schemaPath: '#/properties/scopes/type',
    params: { type: 'array' },
    message: 'should be array'
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
