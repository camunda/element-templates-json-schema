export const template = {
  name: 'Priority Definition',
  id: 'priority-definition',
  description: 'A template to define task priority based on a variable.',
  version: 1,
  appliesTo: [
    'bpmn:Task'
  ],
  elementType: {
    value: 'bpmn:Task'
  },
  properties: [
    {
      type: 'Hidden',
      binding: {
        type: 'zeebe:userTask',
      }
    },
    {
      label: 'Prio',
      value: -1,
      description: 'Prio for task',
      type: 'Integer',
      binding: {
        type: 'zeebe:priorityDefinition',
        property: 'priority'
      }
    },
    {
      label: 'Prio',
      value: 101,
      description: 'Prio for task',
      type: 'Integer',
      binding: {
        type: 'zeebe:priorityDefinition',
        property: 'priority'
      }
    }
  ]
};

export const errors = null;