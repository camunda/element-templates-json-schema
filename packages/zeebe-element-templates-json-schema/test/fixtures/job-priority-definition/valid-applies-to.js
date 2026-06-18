export const template = {
  name: 'Job Priority Definition',
  id: 'job-priority-definition-applies-to',
  description: 'A template to define job priority, applies to multiple task types.',
  version: 1,
  appliesTo: [
    'bpmn:ScriptTask',
    'bpmn:BusinessRuleTask',
    'bpmn:ServiceTask'
  ],
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
