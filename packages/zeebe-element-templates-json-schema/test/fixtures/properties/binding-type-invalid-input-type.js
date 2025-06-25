export const properties = [

  {
    'type': 'String',
    'value': 'latest',
    'binding': {
      'type': 'to be inserted by `itWithProperties`',
      'property': 'bindingType'
    }
  },
  {
    'type': 'Number',
    'value': 1,
    'binding': {
      'type': 'to be inserted by `itWithProperties`',
      'property': 'bindingType'
    }
  },
  {
    'type': 'Text',
    'value': 'latest',
    'binding': {
      'type': 'to be inserted by `itWithProperties`',
      'property': 'bindingType'
    }
  },
  {
    'type': 'Boolean',
    'value': true,
    'binding': {
      'type': 'to be inserted by `itWithProperties`',
      'property': 'bindingType'
    }
  }
];


export const errors = [
  {
    keyword: 'errorMessage',
    dataPath: '/properties/2/type',
    schemaPath: '#/allOf/1/items/allOf/17/then/properties/type/errorMessage',
    params: {
      errors: [
        {
          keyword: 'enum',
          dataPath: '/properties/2/type',
          schemaPath: '#/allOf/1/items/allOf/17/then/properties/type/enum',
          params: {
            allowedValues: [
              'Hidden',
              'Dropdown'
            ]
          },
          message: 'should be equal to one of the allowed values',
          emUsed: true
        }
      ]
    },
    message: 'Incorrect type "String". Must be one of { Hidden, Dropdown } for binding with `property`=`bindingType`'
  },
  {
    keyword: 'if',
    dataPath: '/properties/2',
    schemaPath: '#/allOf/1/items/allOf/17/if',
    params: {
      failingKeyword: 'then'
    },
    message: 'should match "then" schema'
  },
  {
    keyword: 'errorMessage',
    dataPath: '/properties/3/type',
    schemaPath: '#/allOf/1/items/allOf/17/then/properties/type/errorMessage',
    params: {
      errors: [
        {
          keyword: 'enum',
          dataPath: '/properties/3/type',
          schemaPath: '#/allOf/1/items/allOf/17/then/properties/type/enum',
          params: {
            allowedValues: [
              'Hidden',
              'Dropdown'
            ]
          },
          message: 'should be equal to one of the allowed values',
          emUsed: true
        }
      ]
    },
    message: 'Incorrect type "Number". Must be one of { Hidden, Dropdown } for binding with `property`=`bindingType`'
  },
  {
    keyword: 'enum',
    dataPath: '/properties/3/value',
    schemaPath: '#/allOf/1/items/allOf/17/then/properties/value/enum',
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
    dataPath: '/properties/3',
    schemaPath: '#/allOf/1/items/allOf/17/if',
    params: {
      failingKeyword: 'then'
    },
    message: 'should match "then" schema'
  },
  {
    keyword: 'errorMessage',
    dataPath: '/properties/4/type',
    schemaPath: '#/allOf/1/items/allOf/17/then/properties/type/errorMessage',
    params: {
      errors: [
        {
          keyword: 'enum',
          dataPath: '/properties/4/type',
          schemaPath: '#/allOf/1/items/allOf/17/then/properties/type/enum',
          params: {
            allowedValues: [
              'Hidden',
              'Dropdown'
            ]
          },
          message: 'should be equal to one of the allowed values',
          emUsed: true
        }
      ]
    },
    message: 'Incorrect type "Text". Must be one of { Hidden, Dropdown } for binding with `property`=`bindingType`'
  },
  {
    keyword: 'if',
    dataPath: '/properties/4',
    schemaPath: '#/allOf/1/items/allOf/17/if',
    params: {
      failingKeyword: 'then'
    },
    message: 'should match "then" schema'
  },
  {
    keyword: 'errorMessage',
    dataPath: '/properties/5/type',
    schemaPath: '#/allOf/1/items/allOf/17/then/properties/type/errorMessage',
    params: {
      errors: [
        {
          keyword: 'enum',
          dataPath: '/properties/5/type',
          schemaPath: '#/allOf/1/items/allOf/17/then/properties/type/enum',
          params: {
            allowedValues: [
              'Hidden',
              'Dropdown'
            ]
          },
          message: 'should be equal to one of the allowed values',
          emUsed: true
        }
      ]
    },
    message: 'Incorrect type "Boolean". Must be one of { Hidden, Dropdown } for binding with `property`=`bindingType`'
  },
  {
    keyword: 'enum',
    dataPath: '/properties/5/value',
    schemaPath: '#/allOf/1/items/allOf/17/then/properties/value/enum',
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
    dataPath: '/properties/5',
    schemaPath: '#/allOf/1/items/allOf/17/if',
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

