export const template = {
  'name': 'ExecutionListener',
  'id': 'com.camunda.example.ExecutionListener',
  'appliesTo': [
    'bpmn:Task'
  ],
  'properties': [
    {
      'label': 'bar1',
      'type': 'Hidden',
      'binding': {
        'type': 'camunda:executionListener',
        'name': 'class'
      }
    },
    {
      'label': 'bar2',
      'binding': {
        'type': 'camunda:executionListener',
        'name': 'class'
      }
    },
    {
      'label': 'bar3',
      'binding': {
        'type': 'camunda:executionListener',
        'name': 'delegateExpression'
      }
    },
    {
      'label': 'bar4',
      'binding': {
        'type': 'camunda:executionListener',
        'name': 'expression'
      }
    },
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