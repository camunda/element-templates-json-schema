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
          'condition': 'myId == 2'
        }
      ],
      'binding': {
        'type': 'zeebe:property',
        'name': 'method'
      }
    }
  ]
};

export const errors = [
  {
    keyword: 'type',
    dataPath: '/properties/1/choices/2/condition',
    schemaPath: '#/type',
    params: { type: 'object' },
    message: 'should be object'
  },
  {
    keyword: 'type',
    dataPath: '',
    schemaPath: '#/oneOf/1/type',
    params: { type: 'array' },
    message: 'should be array'
  },
  {
    keyword: 'oneOf',
    dataPath: '',
    schemaPath: '#/oneOf',
    params: { passingSchemas: null },
    message: 'should match exactly one schema in oneOf'
  }
];