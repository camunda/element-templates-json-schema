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
    'bpmn:Task'
  ],
  'elementType': {
    'value': 'bpmn:BusinessRuleTask'
  },
  'properties': [
    {
      'type': 'String',
      'value': 'aString',
      'binding': {
        'type': 'zeebe:calledDecision',
        'property': 'decisionId'
      }
    },
    {
      'type': 'Text',
      'value': 'aText',
      'binding': {
        'type': 'zeebe:calledDecision',
        'property': 'resultVariable'
      }
    },
    {
      'type': 'Hidden',
      'value': 'aHiddenValue',
      'binding': {
        'type': 'zeebe:calledDecision',
        'property': 'resultVariable'
      }
    },
    {
      'type': 'Dropdown',
      'choices': [
        {
          'value': 'opt1',
          'name': 'opt1'
        }
      ],
      'binding': {
        'type': 'zeebe:calledDecision',
        'property': 'decisionId'
      }
    }
  ]
};

export const errors = null;