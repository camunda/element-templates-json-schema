export const template = {
  'name': 'generatedValue',
  'id': 'example.com.generatedValue',
  'appliesTo': [
    'bpmn:ServiceTask'
  ],
  'properties': [
    {
      'id': 'myId',
      'label': 'input 1',
      'type': 'String',
      'generatedValue': {
        'type': 'uuid'
      },
      'binding': {
        'type': 'property',
        'name': 'input1'
      }
    },
    {
      'label': 'input 2',
      'type': 'String',
      'binding': {
        'type': 'property',
        'name': 'input2'
      }
    }
  ]
};

export const errors = null;
