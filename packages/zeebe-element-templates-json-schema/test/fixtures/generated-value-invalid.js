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
      'generatedValue': 'uuid',
      'binding': {
        'type': 'property',
        'name': 'input1'
      }
    },
    {
      'id': 'myId',
      'label': 'input 2',
      'type': 'String',
      'generatedValue': {
        'type': 'non-existing'
      },
      'binding': {
        'type': 'property',
        'name': 'input2'
      }
    },
    {
      'label': 'input 3',
      'type': 'Dropdown',
      'choices': [
        {
          'name': 'name',
          'value': 'value'
        }
      ],
      'generatedValue': {
        'type': 'uuid'
      },
      'binding': {
        'type': 'property',
        'name': 'input3'
      }
    },
    {
      'label': 'input 4',
      'type': 'Boolean',
      'generatedValue': {
        'type': 'uuid'
      },
      'binding': {
        'type': 'property',
        'name': 'input4'
      }
    }
  ]
};

export const errors = [
  {
    keyword: 'type',
    dataPath: '/properties/0/generatedValue',
    schemaPath: '#/allOf/1/items/properties/generatedValue/type',
    params: { type: 'object' },
    message: 'should be object'
  },
  {
    keyword: 'const',
    dataPath: '/properties/1/generatedValue/type',
    schemaPath: '#/allOf/1/items/properties/generatedValue/properties/type/const',
    params: { allowedValue: 'uuid' },
    message: 'should be equal to constant'
  },
  {
    keyword: 'not',
    dataPath: '/properties/2',
    schemaPath: '#/allOf/1/items/allOf/7/then/not',
    params: {},
    message: 'should NOT be valid'
  },
  {
    keyword: 'if',
    dataPath: '/properties/2',
    schemaPath: '#/allOf/1/items/allOf/7/if',
    params: { failingKeyword: 'then' },
    message: 'should match "then" schema'
  },
  {
    keyword: 'not',
    dataPath: '/properties/3',
    schemaPath: '#/allOf/1/items/allOf/7/then/not',
    params: {},
    message: 'should NOT be valid'
  },
  {
    keyword: 'if',
    dataPath: '/properties/3',
    schemaPath: '#/allOf/1/items/allOf/7/if',
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
