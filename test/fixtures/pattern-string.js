export const template = {
  'name': 'Pattern Template',
  'id': 'com.example.PatternTemplate',
  'appliesTo': [
    'bpmn:Task'
  ],
  'properties': [
    {
      'label': 'Pattern (String)',
      'description': 'Must match /A+B/',
      'type': 'String',
      'binding': {
        'type': 'property',
        'name': 'prop'
      },
      'constraints': {
        'pattern': 'A+B'
      }
    }
  ]
};

export const errors = null;