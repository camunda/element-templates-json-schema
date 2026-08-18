export const template = {
  name: 'Agent Definition',
  id: 'agent-definition-dropdown-choices',
  description: 'A template with a dropdown of agent types for a service task.',
  version: 1,
  appliesTo: [
    'bpmn:ServiceTask'
  ],
  elementType: {
    value: 'bpmn:ServiceTask'
  },
  properties: [
    {
      label: 'Agent type',
      value: 'aiAgentTask',
      type: 'Dropdown',
      binding: {
        type: 'zeebe:agentDefinition',
        property: 'agentType'
      },
      choices: [
        {
          name: 'AI Agent',
          value: 'aiAgentTask'
        },
        {
          name: 'External',
          value: 'external'
        }
      ]
    }
  ]
};

export const errors = null;
