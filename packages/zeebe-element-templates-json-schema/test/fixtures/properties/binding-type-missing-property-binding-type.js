export const properties = [
  {
    'type': 'Hidden',
    'value': 'vers-1',
    'binding': {
      'type': 'to be inserted by `itWithProperties`',
      'property': 'versionTag'
    }
  }
];


export const errors = {
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
      dataPath: '/properties/2/binding/property',
      schemaPath: '#/allOf/1/allOf/7/then/properties/properties/contains/properties/binding/properties/property/const',
      params: {
        allowedValue: 'bindingType'
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
      dataPath: '/properties/2/binding/property',
      schemaPath: '#/allOf/1/allOf/7/then/properties/properties/contains/properties/binding/properties/property/const',
      params: {
        allowedValue: 'bindingType'
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
