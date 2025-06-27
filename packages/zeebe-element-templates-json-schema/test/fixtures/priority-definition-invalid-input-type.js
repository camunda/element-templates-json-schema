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
      'value': '1',
      'type': 'String',
      'binding': {
        'type': 'zeebe:priorityDefinition',
        'property': 'priority'
      }
    },
    {
      'label': 'Prio 2',
      'value': '1',
      'type': 'String',
      'feel': 'optional',
      'binding': {
        'type': 'zeebe:priorityDefinition',
        'property': 'priority'
      }
    },
    {
      'label': 'Prio 3',
      'value': true,
      'type': 'Boolean',
      'binding': {
        'type': 'zeebe:priorityDefinition',
        'property': 'priority'
      }
    },
    {
      'label': 'Prio 4',
      'value': '1',
      'type': 'Text',
      'binding': {
        'type': 'zeebe:priorityDefinition',
        'property': 'priority'
      }
    },
  ]
};

export const errors = [ {} ];