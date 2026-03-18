export const template = {
  'name': 'TaskListener',
  'id': 'com.camunda.example.TaskListener',
  'appliesTo': [
    'bpmn:UserTask'
  ],
  'properties': [
    {
      'type': 'Hidden',
      'value': 'my-listener-type',
      'binding': {
        'type': 'zeebe:taskListener',
        'eventType': 'completing'
      }
    },
    {
      'type': 'Hidden',
      'value': 'my-listener-type-2',
      'binding': {
        'type': 'zeebe:taskListener',
        'eventType': 'creating',
        'retries': '3'
      }
    },
    {
      'type': 'Hidden',
      'value': 'my-listener-type-3',
      'binding': {
        'type': 'zeebe:taskListener',
        'eventType': 'assigning'
      }
    },
    {
      'type': 'Hidden',
      'value': 'my-listener-type-4',
      'binding': {
        'type': 'zeebe:taskListener',
        'eventType': 'updating'
      }
    },
    {
      'type': 'Hidden',
      'generatedValue': {
        'type': 'uuid'
      },
      'binding': {
        'type': 'zeebe:taskListener',
        'eventType': 'updating'
      }
    }
  ]
};

export const errors = null;
