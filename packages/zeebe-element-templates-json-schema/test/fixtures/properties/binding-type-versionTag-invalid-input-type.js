export const properties = [

  {
    'type': 'Boolean',
    'value': true,
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
      'property': 'versionTag'
    }
  }
];


export const errors = {
  'form-definition-with-formId': [
    {
      keyword: 'required',
      dataPath: '/properties/0',
      schemaPath: '#/allOf/1/allOf/7/then/properties/properties/contains/required',
      params: {
        missingProperty: 'value'
      },
      message: "should have required property 'value'"
    },
    {
      keyword: 'required',
      dataPath: '/properties/0/binding',
      schemaPath: '#/allOf/1/allOf/7/then/properties/properties/contains/properties/binding/required',
      params: {
        missingProperty: 'property'
      },
      message: "should have required property 'property'"
    },
    {
      keyword: 'const',
      dataPath: '/properties/1/binding/property',
      schemaPath: '#/allOf/1/allOf/7/then/properties/properties/contains/properties/binding/properties/property/const',
      params: {
        allowedValue: 'bindingType'
      },
      message: 'should be equal to constant'
    },
    {
      keyword: 'const',
      dataPath: '/properties/1/value',
      schemaPath: '#/allOf/1/allOf/7/then/properties/properties/contains/properties/value/const',
      params: {
        allowedValue: 'versionTag'
      },
      message: 'should be equal to constant'
    },
    {
      keyword: 'const',
      dataPath: '/properties/2/value',
      schemaPath: '#/allOf/1/allOf/7/then/properties/properties/contains/properties/value/const',
      params: {
        allowedValue: 'versionTag'
      },
      message: 'should be equal to constant'
    },
    {
      keyword: 'const',
      dataPath: '/properties/3/binding/property',
      schemaPath: '#/allOf/1/allOf/7/then/properties/properties/contains/properties/binding/properties/property/const',
      params: {
        allowedValue: 'bindingType'
      },
      message: 'should be equal to constant'
    },
    {
      keyword: 'const',
      dataPath: '/properties/3/value',
      schemaPath: '#/allOf/1/allOf/7/then/properties/properties/contains/properties/value/const',
      params: {
        allowedValue: 'versionTag'
      },
      message: 'should be equal to constant'
    },
    {
      keyword: 'contains',
      dataPath: '/properties',
      schemaPath: '#/allOf/1/allOf/7/then/properties/properties/contains',
      params: {
        minContains: 1
      },
      message: 'should contain at least 1 valid item(s)'
    },
    {
      keyword: 'if',
      dataPath: '',
      schemaPath: '#/allOf/1/allOf/7/if',
      params: {
        failingKeyword: 'then'
      },
      message: 'should match "then" schema'
    },
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
      message: 'should be equal to one of the allowed values'
    },
    {
      keyword: 'enum',
      dataPath: '/properties/2/value',
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
      dataPath: '/properties/2',
      schemaPath: '#/allOf/1/items/allOf/17/if',
      params: {
        failingKeyword: 'then'
      },
      message: 'should match "then" schema'
    },
    {
      keyword: 'enum',
      dataPath: '/properties/3/type',
      schemaPath: '#/allOf/1/items/allOf/18/then/allOf/0/properties/type/enum',
      params: {
        allowedValues: [
          'Hidden',
          'Dropdown',
          'String',
          'Text'
        ]
      },
      message: 'should be equal to one of the allowed values'
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
  ],
  'called-decision': [
    {
      keyword: 'const',
      dataPath: '/properties/0/binding/property',
      schemaPath: '#/allOf/1/allOf/7/then/properties/properties/contains/properties/binding/properties/property/const',
      params: {
        allowedValue: 'bindingType'
      },
      message: 'should be equal to constant'
    },
    {
      keyword: 'const',
      dataPath: '/properties/0/value',
      schemaPath: '#/allOf/1/allOf/7/then/properties/properties/contains/properties/value/const',
      params: {
        allowedValue: 'versionTag'
      },
      message: 'should be equal to constant'
    },
    {
      keyword: 'const',
      dataPath: '/properties/1/binding/property',
      schemaPath: '#/allOf/1/allOf/7/then/properties/properties/contains/properties/binding/properties/property/const',
      params: {
        allowedValue: 'bindingType'
      },
      message: 'should be equal to constant'
    },
    {
      keyword: 'const',
      dataPath: '/properties/1/value',
      schemaPath: '#/allOf/1/allOf/7/then/properties/properties/contains/properties/value/const',
      params: {
        allowedValue: 'versionTag'
      },
      message: 'should be equal to constant'
    },
    {
      keyword: 'const',
      dataPath: '/properties/2/value',
      schemaPath: '#/allOf/1/allOf/7/then/properties/properties/contains/properties/value/const',
      params: {
        allowedValue: 'versionTag'
      },
      message: 'should be equal to constant'
    },
    {
      keyword: 'const',
      dataPath: '/properties/3/binding/property',
      schemaPath: '#/allOf/1/allOf/7/then/properties/properties/contains/properties/binding/properties/property/const',
      params: {
        allowedValue: 'bindingType'
      },
      message: 'should be equal to constant'
    },
    {
      keyword: 'const',
      dataPath: '/properties/3/value',
      schemaPath: '#/allOf/1/allOf/7/then/properties/properties/contains/properties/value/const',
      params: {
        allowedValue: 'versionTag'
      },
      message: 'should be equal to constant'
    },
    {
      keyword: 'contains',
      dataPath: '/properties',
      schemaPath: '#/allOf/1/allOf/7/then/properties/properties/contains',
      params: {
        minContains: 1
      },
      message: 'should contain at least 1 valid item(s)'
    },
    {
      keyword: 'if',
      dataPath: '',
      schemaPath: '#/allOf/1/allOf/7/if',
      params: {
        failingKeyword: 'then'
      },
      message: 'should match "then" schema'
    },
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
      message: 'should be equal to one of the allowed values'
    },
    {
      keyword: 'enum',
      dataPath: '/properties/2/value',
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
      dataPath: '/properties/2',
      schemaPath: '#/allOf/1/items/allOf/17/if',
      params: {
        failingKeyword: 'then'
      },
      message: 'should match "then" schema'
    },
    {
      keyword: 'enum',
      dataPath: '/properties/3/type',
      schemaPath: '#/allOf/1/items/allOf/18/then/allOf/0/properties/type/enum',
      params: {
        allowedValues: [
          'Hidden',
          'Dropdown',
          'String',
          'Text'
        ]
      },
      message: 'should be equal to one of the allowed values'
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

};

