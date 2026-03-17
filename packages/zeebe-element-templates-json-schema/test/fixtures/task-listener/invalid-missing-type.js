export const template = {
  'name': 'test',
  'id': 'test',
  'appliesTo': [
    'bpmn:Task'
  ],
  'elementType': {
    'value': 'bpmn:UserTask'
  },
  'properties': [
    {
      'binding': {
        'type': 'zeebe:taskListener',
        'eventType': 'assigning'
      }
    }
  ]
};

export const errors = [

];
