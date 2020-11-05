export const templates = {
  'name': 'InvalidVersion',
  'id': 'com.camunda.example.InvalidVersion',
  'version': 'foo',
  'appliesTo': [
    'bpmn:Task'
  ],
  'properties': []
};

export const errors = [
  {
    'keyword': 'type',
    'dataPath': '',
    'schemaPath': '#/type',
    'params': {
      'type': 'object'
    },
    'message': 'should be object'
  }
];