export const template = {
  'name': 'Job Priority Definition',
  'id': 'job-priority-definition',
  'description': 'A template to define job priority.',
  'version': 1,
  'appliesTo': [
    'bpmn:Task'
  ],
  'elementType': {
    'value': 'bpmn:ServiceTask'
  },
  'properties': [
    {
      'type': 'Hidden',
      'value': 'my-job-worker',
      'binding': {
        'type': 'zeebe:taskDefinition',
        'property': 'type'
      }
    },
    {
      'value': '50',
      'constraints': {
        'notEmpty': true
      },
      'type': 'Hidden',
      'binding': {
        'type': 'zeebe:jobPriorityDefinition',
        'property': 'priority'
      }
    },
    {
      'value': 90,
      'constraints': {
        'notEmpty': true
      },
      'type': 'Number',
      'binding': {
        'type': 'zeebe:jobPriorityDefinition',
        'property': 'priority'
      }
    },
    {
      'value': -5,
      'type': 'Number',
      'binding': {
        'type': 'zeebe:jobPriorityDefinition',
        'property': 'priority'
      }
    },
    {
      'value': 200,
      'type': 'Number',
      'binding': {
        'type': 'zeebe:jobPriorityDefinition',
        'property': 'priority'
      }
    },
    {
      'label': 'Prio',
      'value': '50',
      'description': 'Prio for job',
      'type': 'Dropdown',
      'binding': {
        'type': 'zeebe:jobPriorityDefinition',
        'property': 'priority'
      },
      'choices': [
        {
          'name': 'High',
          'value': '90'
        },
        {
          'name': 'Medium',
          'value': '50'
        },
        {
          'name': 'Low',
          'value': '10'
        }
      ]
    }
  ]
};

export const errors = null;
