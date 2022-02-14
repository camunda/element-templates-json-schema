export const template = {
  'name': 'MissingType',
  'id': 'com.camunda.example.MissingType',
  'appliesTo': [
    'bpmn:Task'
  ],
  'properties': [
    {
      'label': 'foo',
      'binding': {
        'type': 'property',
        'name': 'foo'
      }
    }
  ]
};

export const errors = null;