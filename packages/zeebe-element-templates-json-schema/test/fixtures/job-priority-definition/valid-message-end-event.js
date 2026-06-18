export const template = {
  name: 'Job Priority Definition',
  id: 'job-priority-definition-message-end',
  description: 'A template to define job priority on a message end event.',
  version: 1,
  appliesTo: [
    'bpmn:EndEvent'
  ],
  elementType: {
    value: 'bpmn:EndEvent',
    eventDefinition: 'bpmn:MessageEventDefinition'
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
