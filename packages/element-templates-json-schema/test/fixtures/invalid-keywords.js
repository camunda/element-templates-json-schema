export const template = {
  'name': 'Keywords',
  'id': 'com.camunda.example.Keywords',
  'appliesTo': [
    'bpmn:Task'
  ],
  'properties': [],
  'keywords': 123
};

export const errors = [
  {
    'keyword': 'type',
    'dataPath': '/keywords',
    'schemaPath': '#/allOf/0/properties/keywords/type',
    'params': {
      'type': 'array'
    },
    'message': 'should be array'
  },
  {
    'keyword': 'type',
    'dataPath': '',
    'schemaPath': '#/oneOf/1/type',
    'params': {
      'type': 'array'
    },
    'message': 'should be array'
  },
  {
    'keyword': 'oneOf',
    'dataPath': '',
    'schemaPath': '#/oneOf',
    'params': {
      'passingSchemas': null
    },
    'message': 'should match exactly one schema in oneOf'
  }
];