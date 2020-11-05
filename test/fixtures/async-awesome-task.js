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
  'entriesVisible': {
    '_all': true,
    'asyncBefore': false
  }
};

export const errors = null;