export const template = {
  'name': 'Pattern Template',
  'id': 'com.example.PatternTemplate',
  'appliesTo': [
    'bpmn:Task'
  ],
  'properties': [
    {
      'label': 'Feel (Boolean)',
      'type': 'Boolean',
      'binding': {
        'type': 'property',
        'name': 'prop'
      },
      'feel': 'required'
    }
  ]
};

export const errors = [
  {
    keyword: 'errorMessage',
    dataPath: '/properties/0',
    schemaPath: '#/definitions/properties/allOf/0/items/allOf/1/then/errorMessage',
    params: {
      errors: [
        {
          dataPath: '/properties/0',
          emUsed: true,
          keyword: 'not',
          message: 'should NOT be valid',
          params: {},
          schemaPath: '#/definitions/properties/allOf/0/items/allOf/1/then/not'
        }
      ]
    },
    message: 'feel is only valid for "String" and "Text" type'
  },
  {
    keyword: 'if',
    dataPath: '/properties/0',
    schemaPath: '#/definitions/properties/allOf/0/items/allOf/1/if',
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