export const properties = [

  {
    'type': 'Hidden',
    'value': 'versionTag',
    'binding': {
      'type': 'to be inserted by `itWithProperties`',
      'property': 'bindingType'
    }
  },
  {
    'type': 'String',
    'feel': 'optional',
    'value': 'vers-1',
    'binding': {
      'type': 'to be inserted by `itWithProperties`',
      'property': 'versionTag'
    }
  }
];


export const errors = [
  {
    keyword: 'not',
    dataPath: '/properties/3',
    schemaPath: '#/allOf/1/items/allOf/18/then/allOf/1/not',
    params: {},
    message: 'should NOT be valid'
  },
  {
    keyword: 'if',
    dataPath: '/properties/3',
    schemaPath: '#/allOf/1/items/allOf/18/if',
    params: {
      failingKeyword: 'then'
    },
    message: 'should match "then" schema'
  },
  {
    keyword: 'type',
    dataPath: '',
    schemaPath: '#/oneOf/1/type',
    params: {
      type: 'array'
    },
    message: 'should be array'
  },
  {
    keyword: 'oneOf',
    dataPath: '',
    schemaPath: '#/oneOf',
    params: {
      passingSchemas: null
    },
    message: 'should match exactly one schema in oneOf'
  }
]
;