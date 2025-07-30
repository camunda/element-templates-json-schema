export const template = {
  'name': 'Zeebe User Task Hidden Property',
  'id': 'com.camunda.example.ZeebeUserTaskHiddenProperty',
  'description': 'A template to define a value less hidden property for a Zeebe user task.',
  'version': 1,
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