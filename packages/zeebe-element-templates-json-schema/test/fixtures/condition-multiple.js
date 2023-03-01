export const template = {
  'name': 'Condition',
  'id': 'example.com.condition',
  'appliesTo': [
    'bpmn:ServiceTask'
  ],
  'properties': [
    {
      'id': 'prop1',
      'label': 'input 1',
      'type': 'String',
      'binding': {
        'type': 'property',
        'name': 'input1'
      }
    },
    {
      'id': 'prop2',
      'label': 'input 2',
      'type': 'String',
      'binding': {
        'type': 'property',
        'name': 'input2'
      }
    },
    {
      'label': 'equals (string)',
      'type': 'String',
      'condition': {
        'allMatch': [
          {
            'type': 'simple',
            property: 'prop1',
            equals: 'text'
          },
          {
            'type': 'simple',
            property: 'prop2',
            equals: 11
          }
        ]

      },
      'binding': {
        'type': 'property',
        'name': 'input2'
      }
    },
  ]
};

export const errors = null;