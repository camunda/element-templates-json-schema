export const template = {
  'name': 'AdditionalProperty',
  'id': 'com.camunda.example.AdditionalProperty',
  'appliesTo': [
    'bpmn:Task'
  ],
  'properties': [
    {
      'type': 'Hidden',
      'binding': {
        'type': 'property',
        'name': 'foo',
        'property': 'versionTag' // This property is not used and should not cause an error
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