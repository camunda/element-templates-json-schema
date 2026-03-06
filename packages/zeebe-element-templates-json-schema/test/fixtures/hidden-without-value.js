export const template = {
  'name': 'HiddenWithoutValue',
  'id': 'com.camunda.example.hidden-without-value',
  'appliesTo': [
    'bpmn:ServiceTask'
  ],
  'properties': [
    {
      'type': 'Hidden',
      'binding': {
        'type': 'zeebe:taskDefinition',
        'property': 'type'
      }
    }
  ]
};

export const errors = null;
