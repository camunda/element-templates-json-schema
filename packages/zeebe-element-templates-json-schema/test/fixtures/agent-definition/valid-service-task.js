export const template = {
  name: 'Agent Definition',
  id: 'agent-definition-service-task',
  description: 'A template to define an agent definition on a service task.',
  version: 1,
  appliesTo: [
    'bpmn:ServiceTask'
  ],
  elementType: {
    value: 'bpmn:ServiceTask'
  },
  properties: [
    {
      value: 'aiAgentTask',
      type: 'Hidden',
      binding: {
        type: 'zeebe:agentDefinition',
        property: 'agentType'
      }
    }
  ]
};

export const errors = null;
