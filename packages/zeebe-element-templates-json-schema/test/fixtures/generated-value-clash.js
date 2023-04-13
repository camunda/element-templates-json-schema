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
      'value': 'value',
      'generatedValue': {
        'type': 'uuid'
      },
      'binding': {
        'type': 'property',
        'name': 'input1'
      }
    }
  ]
};

export const errors = [
  {
    keyword: 'not',
    dataPath: '/properties/0',
    schemaPath: '#/allOf/1/items/allOf/6/then/not',
    params: {},
    message: 'should NOT be valid'
  },
  {
    keyword: 'if',
    dataPath: '/properties/0',
    schemaPath: '#/allOf/1/items/allOf/6/if',
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
