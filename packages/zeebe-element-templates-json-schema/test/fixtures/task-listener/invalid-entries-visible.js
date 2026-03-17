export const template = {
  'name': 'test',
  'id': 'test',
  'appliesTo': [
    'bpmn:Task'
  ],
  'entriesVisible': {
    'userTaskListeners': true
  },
  'elementType': {
    'value': 'bpmn:UserTask'
  },
  'properties': [
    {
      'type': 'Hidden',
      'value': 'my-listener-type',
      'binding': {
        'type': 'zeebe:taskListener',
        'eventType': 'assigning'
      }
    }
  ]
};

export const errors = [

];
