export const template = {
  name: 'Job Priority Definition',
  id: 'job-priority-definition-send-task',
  description: 'A template to define job priority on a send task.',
  version: 1,
  appliesTo: [
    'bpmn:Task'
  ],
  elementType: {
    value: 'bpmn:SendTask'
  },
  properties: [
    {
      value: '50',
      type: 'Hidden',
      binding: {
        type: 'zeebe:jobPriorityDefinition',
        property: 'priority'
      }
    }
  ]
};

export const errors = null;
