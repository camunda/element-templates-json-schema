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