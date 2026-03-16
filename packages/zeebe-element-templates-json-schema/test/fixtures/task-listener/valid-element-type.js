export const template = {
  'name': 'TaskListenerWithElementType',
  'id': 'com.camunda.example.TaskListenerWithElementType',
  'appliesTo': [
    'bpmn:Task'
  ],
  'elementType': {
    'value': 'bpmn:UserTask'
  },
  'properties': [
    {
      'type': 'Hidden',
      'value': 'my-listener-type',
      'binding': {
        'type': 'zeebe:taskListener',
        'eventType': 'completing'
      }
    }
  ]
};

export const errors = null;
