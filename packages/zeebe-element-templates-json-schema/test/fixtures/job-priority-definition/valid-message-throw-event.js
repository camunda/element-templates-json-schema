export const template = {
  name: 'Job Priority Definition',
  id: 'job-priority-definition-message-throw',
  description: 'A template to define job priority on a message throw event.',
  version: 1,
  appliesTo: [
    'bpmn:IntermediateThrowEvent'
  ],
  elementType: {
    value: 'bpmn:IntermediateThrowEvent',
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
