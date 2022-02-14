export const template = {
  'name': 'AsyncAwesomeTask',
  'id': 'com.camunda.example.AwesomeTask',
  'appliesTo': [
    'bpmn:Task'
  ],
  'properties': [
    {
      'label': 'Are you awesome?',
      'type': 'Boolean',
      'value': true,
      'binding': {
        'type': 'property',
        'name': 'camunda:asyncBefore'
      }
    }
  ],
  'entriesVisible': true
};

export const errors = null;
