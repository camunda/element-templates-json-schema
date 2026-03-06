export const template = {
  'name': 'HiddenWithGeneratedValue',
  'id': 'com.camunda.example.hidden-with-generated-value',
  'appliesTo': [
    'bpmn:ServiceTask'
  ],
  'properties': [
    {
      'type': 'Hidden',
      'generatedValue': {
        'type': 'uuid'
      },
      'binding': {
        'type': 'zeebe:taskDefinition',
        'property': 'type'
      }
    }
  ]
};

export const errors = null;
