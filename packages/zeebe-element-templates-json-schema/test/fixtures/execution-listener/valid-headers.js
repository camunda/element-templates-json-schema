export const template = {
  'name': 'ExecutionListenerWithHeaders',
  'id': 'com.camunda.example.ExecutionListenerWithHeaders',
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
        'eventType': 'start',
        'headers': [
          { 'key': 'authToken', 'value': 'abc' },
          { 'key': 'endpoint', 'value': 'endpointURL' }
        ]
      }
    },
    {
      'type': 'Hidden',
      'value': 'my-listener-type-end',
      'binding': {
        'type': 'zeebe:executionListener',
        'eventType': 'end'
      }
    }
  ]
};

export const errors = null;
