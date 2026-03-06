export const template = {
  'name': 'HiddenWithValue',
  'id': 'com.camunda.example.hidden-with-value',
  'appliesTo': [
    'bpmn:ServiceTask'
  ],
  'properties': [
    {
      'type': 'Hidden',
      'value': 'http',
      'binding': {
        'type': 'zeebe:taskDefinition',
        'property': 'type'
      }
    }
  ]
};

export const errors = null;
