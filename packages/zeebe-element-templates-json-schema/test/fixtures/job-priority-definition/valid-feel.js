export const template = {
  name: 'Job Priority Definition',
  id: 'job-priority-definition',
  description: 'A template to define job priority.',
  version: 1,
  appliesTo: [
    'bpmn:Task'
  ],
  elementType: {
    value: 'bpmn:ServiceTask'
  },
  properties: [
    {
      type: 'Hidden',
      value: 'my-job-worker',
      binding: {
        type: 'zeebe:taskDefinition',
        property: 'type'
      }
    },
    {
      value: '= order.priority',
      type: 'Hidden',
      binding: {
        type: 'zeebe:jobPriorityDefinition',
        property: 'priority'
      }
    },
    {
      value: '-5',
      type: 'Hidden',
      binding: {
        type: 'zeebe:jobPriorityDefinition',
        property: 'priority'
      }
    },
    {
      value: '= order.priority',
      type: 'Number',
      feel: 'optional',
      binding: {
        type: 'zeebe:jobPriorityDefinition',
        property: 'priority'
      }
    },
    {
      label: 'Prio',
      value: '= order.priority',
      type: 'Dropdown',
      binding: {
        type: 'zeebe:jobPriorityDefinition',
        property: 'priority'
      },
      choices: [
        {
          name: 'Dynamic',
          value: '= order.priority'
        },
        {
          name: 'High',
          value: '90'
        },
        {
          name: 'Negative',
          value: '-5'
        }
      ]
    }
  ]
};

export const errors = null;
