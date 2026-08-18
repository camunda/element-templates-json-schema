export const template = {
  name: 'Agent Definition',
  id: 'agent-definition-service-task-applies-to-only',
  description: 'A template to define an agent definition on a service task, targeted via appliesTo only.',
  version: 1,
  appliesTo: [
    'bpmn:ServiceTask'
  ],
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
