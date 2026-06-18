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
      label: 'Prio',
      value: '= 1',
      description: 'Prio for job',
      type: 'String',
      feel: 'required',
      binding: {
        type: 'zeebe:jobPriorityDefinition',
        property: 'priority'
      }
    }
  ]
};

export const errors = null;
