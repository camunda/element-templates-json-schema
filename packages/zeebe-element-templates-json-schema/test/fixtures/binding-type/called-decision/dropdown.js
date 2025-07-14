export const template = {
  '$schema': 'https://unpkg.com/@camunda/zeebe-element-templates-json-schema/resources/schema.json',
  'name': 'Reusable Rule Template',
  'id': 'io.camunda.examples.Decision',
  'description': 'A reusable rule template',
  'version': 1,
  'engines': {
    'camunda': '^8.6'
  },
  'appliesTo': [
    'bpmn:Task',
    'bpmn:BusinessRuleTask'
  ],
  'elementType': {
    'value': 'bpmn:BusinessRuleTask'
  },
  'properties': [
    {
      'type': 'Hidden',
      'value': 'aReusableRule',
      'binding': {
        'type': 'zeebe:calledDecision',
        'property': 'decisionId'
      }
    },
    {
      'type': 'Hidden',
      'value': 'aResultVariable',
      'binding': {
        'type': 'zeebe:calledDecision',
        'property': 'resultVariable'
      }
    },
    {
      'type': 'Dropdown',
      'label': 'Binding',
      'id': 'bindingType',
      'binding': {
        'type': 'zeebe:calledDecision',
        'property': 'bindingType'
      },
      'choices': [
        {
          'name': 'Latest',
          'value': 'latest'
        },
        {
          'name': 'Deployment',
          'value': 'deployment'
        },
        {
          'name': 'Version Tag',
          'value': 'versionTag'
        }
      ],
      'value': 'latest',
    },
    {
      'type': 'String',
      'label': 'Version tag',
      'binding': {
        'type': 'zeebe:calledDecision',
        'property': 'versionTag'
      },
      'condition': {
        'property': 'bindingType',
        'equals': 'versionTag'
      }
    }
  ]
};

export const errors = null;