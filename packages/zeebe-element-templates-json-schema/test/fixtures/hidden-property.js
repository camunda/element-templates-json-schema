export const template = {
  'name': 'HiddenProperty',
  '$schema': '../../resources/schema.json',
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
      'binding': {
        'type': 'property',
        'name': 'resultVariable'
      }
    },
    {
      'type': 'Hidden',
      'value': 'hiddenValue',
      'binding': {
        'type': 'property',
        'name': 'resultVariable'
      }
    }
  ]
};

export const errors = null;

export const warnings = [
  {
    keyword: 'isDeprecated',
    dataPath: '/properties/0',
    message: 'Hidden property must specify either "value" or "generatedValue"'
  }
];