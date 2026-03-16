export const template = {
  'name': 'ExecutionListener',
  'id': 'com.camunda.example.ExecutionListener',
  'appliesTo': [
    'bpmn:Task'
  ],
  'entriesVisible': {
    'executionListeners': false
  },
  'properties': [
    {
      'type': 'Hidden',
      'value': 'my-listener-type',
      'binding': {
        'type': 'zeebe:executionListener',
        'eventType': 'start'
      }
    },
    {
      'type': 'Hidden',
      'value': 'my-listener-type-end',
      'binding': {
        'type': 'zeebe:executionListener',
        'eventType': 'end',
        'retries': '3'
      }
    }
  ]
};

export const errors = null;
