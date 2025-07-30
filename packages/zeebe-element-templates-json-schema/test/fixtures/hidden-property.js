export const template = {
  'name': 'HiddenProperty',
  'id': 'com.camunda.example.HiddenProperty',
  'appliesTo': [
    'bpmn:Task'
  ],
  'elementType': {
    'value': 'bpmn:BusinessRuleTask'
  },
  'properties': [
    {
      'type': 'Hidden',
      'value': 'decision',
      'binding': {
        'type': 'zeebe:calledDecision',
        'property': 'decisionId'
      }
    },
    {
      'type': 'Hidden',
      'binding': {
        'type': 'zeebe:calledDecision',
        'property': 'resultVariable'
      }
    }
  ]
};

export const errors = null;
