export const template = {
  'name': 'InvalidExecutionListenerImplementationType',
  'id': 'com.camunda.example.InvalidExecutionListenerImplementationType',
  'appliesTo': [
    'bpmn:Task'
  ],
  'properties': [
    {
      'label': 'unknown implementation type',
      'binding': {
        'type': 'camunda:executionListener',
        'implementationType': 'unknown'
      }
    },
    {
      'label': 'script format only allowed with scripts',
      'binding': {
        'type': 'camunda:executionListener',
        'implementationType': 'class',
        'scriptFormat': 'js',
      }
    },
    {
      'label': 'implementation type of script requires scriptFormat',
      'binding': {
        'type': 'camunda:executionListener',
        'implementationType': 'script',
      }
    },
  ]
};

export const errors = [];
