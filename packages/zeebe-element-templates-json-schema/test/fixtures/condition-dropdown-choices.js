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
      }
    },
    {
      'label': 'Dropdown',
      'type': 'Dropdown',
      'choices': [
        {
          'value': 'opt1',
          'name':'opt1'
        },
        {
          'value': 'opt2',
          'name': 'opt2'
        },
        {
          'value': 'opt3',
          'name': 'opt3',
          'condition': {
            'property': 'myId',
            'equals': 'text'
          }
        }
      ],
      'binding': {
        'type': 'zeebe:property',
        'name': 'method'
      }
    }
  ]
};

export const errors = null;