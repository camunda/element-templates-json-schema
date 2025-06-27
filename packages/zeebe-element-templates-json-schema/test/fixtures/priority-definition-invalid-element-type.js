export const template = {
  'name': 'Priority Definition',
  'id': 'priority-definition',
  'description': 'A template to define task priority based on a variable.',
  'version': 1,
  'appliesTo': [
    'bpmn:Task'
  ],
  'elementType': {
    'value': 'bpmn:Task'
  },
  'properties': [
    {
      'type': 'Hidden',
      'binding': {
        'type': 'zeebe:userTask',
      }
    },
    {
      'label': 'Prio',
      'value': '100',
      'description': 'Prio for task',
      'constraints': {
        'notEmpty': true
      },
      'type': 'Dropdown',
      'binding': {
        'type': 'zeebe:priorityDefinition',
        'property': 'priority'
      },
      'choices': [
        {
          'name': 'High',
          'value': '100'
        },
        {
          'name': 'Medium',
          'value': '50'
        },
        {
          'name': 'Low',
          'value': '0'
        }
      ]
    }
  ]
};

// This is transitively caught by `zeebe:userTask` requiring `bpmn:UserTask`
export const errors = [ {} ];