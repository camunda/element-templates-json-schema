export const template = {
  'name': 'Condition',
  'id': 'example.com.condition',
  'appliesTo': [
    'bpmn:ServiceTask'
  ],
  'properties': [
    {
      'id': 'myId',
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
    },
    {
      'id': 'valid',
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
    },
    {
      'id': 'validAllMatch',
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
            'allMatch': [
              {
                'property': 'myId',
                'equals': 'text'
              }
            ]

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

// TODO(@barmac): should report errors
export const errors = null;