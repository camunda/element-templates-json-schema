export const template = {
  'name': 'Priority Definition',
  'id': 'priority-definition',
  'description': 'A template to define task priority based on a variable.',
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
    },
    {
      'value': '0',
      'constraints': {
        'notEmpty': true
      },
      'type': 'Hidden',
      'binding': {
        'type': 'zeebe:priorityDefinition',
        'property': 'priority'
      }
    },
    {
      'value': 50,
      'constraints': {
        'notEmpty': true
      },
      'type': 'Number',
      'binding': {
        'type': 'zeebe:priorityDefinition',
        'property': 'priority'
      }
    },
    {
      'label': 'Prio',
      'value': '100',
      'description': 'Prio for task',
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

export const errors = null;