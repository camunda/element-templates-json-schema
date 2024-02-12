export const template = {
  'name': 'Condition',
  'id': 'example.com.condition',
  'appliesTo': [
    'bpmn:ServiceTask'
  ],
  'properties': [
    {
      'id': 'myId',
      'label': 'input 1',
      'type': 'String',
      'binding': {
        'type': 'property',
        'name': 'input1'
      },
      'condition': {
        'allMatch': [
          {
            'type': 'simple',
            property: 'myId',
            equals: 'text'
          }
        ]
      }
    }
  ]
};

// TODO(@barmac): should report errors
export const errors = null;
