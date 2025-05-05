export const template = {
  'name': 'ZeebeUserTask',
  'id': 'com.camunda.example.ZeebeUserTask',
  'appliesTo': [
    'bpmn:Task'
  ],
  'elementType': {
    'value': 'bpmn:UserTask'
  },
  'properties': [
    {
      'type': 'Hidden',
      'binding': {
        'type': 'zeebe:userTask',
      }
    }
  ]
};

export const errors = null;