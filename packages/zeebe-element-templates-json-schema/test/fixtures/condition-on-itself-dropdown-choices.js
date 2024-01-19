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
    }
  ]
};

export const errors = [
  {
    keyword: 'errorMessage',
    dataPath: '/properties/0',
    schemaPath: '#/allOf/0/items/allOf/1/allOf/1/then/errorMessage',
    params: {
      errors: [
        {
          keyword: 'not',
          dataPath: '/properties/0',
          schemaPath: '#/allOf/0/items/allOf/1/allOf/1/then/not',
          params: {},
          message: 'should NOT be valid',
          emUsed: true
        }
      ]
    },
    message: 'Invalid condition.property, must be different than property.id'
  },
  {
    keyword: 'if',
    dataPath: '/properties/0',
    schemaPath: '#/allOf/0/items/allOf/1/allOf/1/if',
    params: { failingKeyword: 'then' },
    message: 'should match "then" schema'
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