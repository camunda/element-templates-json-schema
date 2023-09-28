export const template = {
  'name': 'InvalidExecutionListenerImplementationType',
  'id': 'com.camunda.example.InvalidExecutionListenerImplementationType',
  'appliesTo': [
    'bpmn:Task'
  ],
  'properties': [
    {
      'label': 'foo',
      'binding': {
        'type': 'camunda:executionListener',
        'name': 'unknown'
      }
    },
    {
      'label': 'bar',
      'binding': {
        'type': 'camunda:executionListener',
        'name': 'class',
        'scriptFormat': 'js',
      }
    },
  ]
};

export const errors = [
  {
  }
];
