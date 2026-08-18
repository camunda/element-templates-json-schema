export const template = {
  name: 'Agent Definition',
  id: 'agent-definition-adhoc-sub-process',
  description: 'A template to define an agent definition on an ad-hoc sub-process.',
  version: 1,
  appliesTo: [
    'bpmn:AdHocSubProcess'
  ],
  elementType: {
    value: 'bpmn:AdHocSubProcess'
  },
  properties: [
    {
      value: 'aiAgentSubProcess',
      type: 'Hidden',
      binding: {
        type: 'zeebe:agentDefinition',
        property: 'agentType'
      }
    }
  ]
};

export const errors = null;
