export const template = {
  'name': 'ExecutionListener',
  'id': 'com.camunda.example.ExecutionListener',
  'appliesTo': [
    'bpmn:Task'
  ],
  'properties': [
    {
      'label': 'foo',
      'type': 'Hidden',
      'binding': {
        'type': 'camunda:executionListener'
      }
    },
    {
      'label': 'bar',
      'binding': {
        'type': 'camunda:executionListener'
      }
    }
  ]
};

export const errors = null;