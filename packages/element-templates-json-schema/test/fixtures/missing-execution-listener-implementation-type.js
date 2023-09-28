export const template = {
  'name': 'MissingExecutionListenerImplementationType',
  'id': 'com.camunda.example.MissingExecutionListenerImplementationType',
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
    }
  ]
};

export const errors = [
  {

  }
];
