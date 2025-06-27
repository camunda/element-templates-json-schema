export const properties = [
  {
    'type': 'Hidden',
    'value': 'youShallNotPass',
    'binding': {
      'type': 'to be inserted by `itWithProperties`',
      'property': 'bindingType'
    }
  }
];


export const errors = [
  {
    keyword: 'enum',
    dataPath: '/properties/2/value',
    schemaPath: '#/allOf/1/items/allOf/20/then/properties/value/enum',
    params: {
      allowedValues: [
        'latest',
        'versionTag',
        'deployment'
      ]
    },
    message: 'should be equal to one of the allowed values'
  },
  {
    keyword: 'if',
    dataPath: '/properties/2',
    schemaPath: '#/allOf/1/items/allOf/20/if',
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
];