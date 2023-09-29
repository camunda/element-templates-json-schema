export const template = {
  'name': 'ExecutionListener',
  'id': 'com.camunda.example.ExecutionListener',
  'appliesTo': [
    'bpmn:Task'
  ],
  'properties': [
    {
      'label': 'type hidden is allowed',
      'type': 'Hidden',
      'binding': {
        'type': 'camunda:executionListener',
        'implementationType': 'class'
      }
    },
    {
      'label': 'implementation type class is supported',
      'binding': {
        'type': 'camunda:executionListener',
        'implementationType': 'class'
      }
    },
    {
      'label': 'implementation type delegateExpression is supported',
      'binding': {
        'type': 'camunda:executionListener',
        'implementationType': 'delegateExpression'
      }
    },
    {
      'label': 'implementation type expression is supported',
      'binding': {
        'type': 'camunda:executionListener',
        'implementationType': 'expression'
      }
    },
    {
      'label': 'implementation type script is supported',
      'binding': {
        'type': 'camunda:executionListener',
        'implementationType': 'script',
        'scriptFormat': 'js'
      }
    },
    // For backwards compatibility support missing attributes as well
    {
      'label': 'bar5',
      'binding': {
        'type': 'camunda:executionListener'
      }
    },
    // For backwards compatibility support scriptFormat only
    {
      'label': 'bar5',
      'binding': {
        'type': 'camunda:executionListener',
        'scriptFormat': 'js'
      }
    }
  ]
};

export const errors = null;