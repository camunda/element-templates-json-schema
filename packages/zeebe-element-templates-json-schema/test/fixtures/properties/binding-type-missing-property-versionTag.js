export const properties = [
  {
    'type': 'Hidden',
    'value': 'versionTag',
    'binding': {
      'type': 'to be inserted by `itWithProperties`',
      'property': 'bindingType'
    }
  }
];

export const errors = {
  'called-decision': [
    {
      keyword: 'errorMessage',
      dataPath: '/properties',
      schemaPath: '#/allOf/1/allOf/6/then/properties/properties/errorMessage',
      params: {
        errors: [
          {
            keyword: 'const',
            dataPath: '/properties/0/binding/property',
            schemaPath: '#/allOf/1/allOf/6/then/properties/properties/contains/properties/binding/properties/property/const',
            params: {
              allowedValue: 'versionTag'
            },
            message: 'should be equal to constant',
            emUsed: true
          },
          {
            keyword: 'const',
            dataPath: '/properties/1/binding/property',
            schemaPath: '#/allOf/1/allOf/6/then/properties/properties/contains/properties/binding/properties/property/const',
            params: {
              allowedValue: 'versionTag'
            },
            message: 'should be equal to constant',
            emUsed: true
          },
          {
            keyword: 'const',
            dataPath: '/properties/2/binding/property',
            schemaPath: '#/allOf/1/allOf/6/then/properties/properties/contains/properties/binding/properties/property/const',
            params: {
              allowedValue: 'versionTag'
            },
            message: 'should be equal to constant',
            emUsed: true
          },
          {
            keyword: 'contains',
            dataPath: '/properties',
            schemaPath: '#/allOf/1/allOf/6/then/properties/properties/contains',
            params: {
              minContains: 1
            },
            message: 'should contain at least 1 valid item(s)',
            emUsed: true
          }
        ]
      },
      message: 'Missing binding with `property`=`versionTag` as binding with `property`=`bindingType` and `value`=`versionTag` is set'
    },
    {
      keyword: 'if',
      dataPath: '',
      schemaPath: '#/allOf/1/allOf/6/if',
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
  'form-definition-with-formId':  [
    {
      keyword: 'errorMessage',
      dataPath: '/properties',
      schemaPath: '#/allOf/1/allOf/6/then/properties/properties/errorMessage',
      params: {
        errors: [
          {
            keyword: 'required',
            dataPath: '/properties/0/binding',
            schemaPath: '#/allOf/1/allOf/6/then/properties/properties/contains/properties/binding/required',
            params: {
              missingProperty: 'property'
            },
            message: "should have required property 'property'",
            emUsed: true
          },
          {
            keyword: 'enum',
            dataPath: '/properties/0/binding/type',
            schemaPath: '#/allOf/1/allOf/6/then/properties/properties/contains/properties/binding/properties/type/enum',
            params: {
              allowedValues: [
                'zeebe:calledDecision',
                'zeebe:formDefinition',
                'zeebe:calledElement'
              ]
            },
            message: 'should be equal to one of the allowed values',
            emUsed: true
          },
          {
            keyword: 'const',
            dataPath: '/properties/1/binding/property',
            schemaPath: '#/allOf/1/allOf/6/then/properties/properties/contains/properties/binding/properties/property/const',
            params: {
              allowedValue: 'versionTag'
            },
            message: 'should be equal to constant',
            emUsed: true
          },
          {
            keyword: 'const',
            dataPath: '/properties/2/binding/property',
            schemaPath: '#/allOf/1/allOf/6/then/properties/properties/contains/properties/binding/properties/property/const',
            params: {
              allowedValue: 'versionTag'
            },
            message: 'should be equal to constant',
            emUsed: true
          },
          {
            keyword: 'contains',
            dataPath: '/properties',
            schemaPath: '#/allOf/1/allOf/6/then/properties/properties/contains',
            params: {
              minContains: 1
            },
            message: 'should contain at least 1 valid item(s)',
            emUsed: true
          }
        ]
      },
      message: 'Missing binding with `property`=`versionTag` as binding with `property`=`bindingType` and `value`=`versionTag` is set'
    },
    {
      keyword: 'if',
      dataPath: '',
      schemaPath: '#/allOf/1/allOf/6/if',
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
  'called-element':  [
    {
      keyword: 'errorMessage',
      dataPath: '/properties',
      schemaPath: '#/allOf/1/allOf/6/then/properties/properties/errorMessage',
      params: {
        errors: [
          {
            keyword: 'required',
            dataPath: '/properties/0/binding',
            schemaPath: '#/allOf/1/allOf/6/then/properties/properties/contains/properties/binding/required',
            params: {
              missingProperty: 'property'
            },
            message: "should have required property 'property'",
            emUsed: true
          },
          {
            keyword: 'enum',
            dataPath: '/properties/0/binding/type',
            schemaPath: '#/allOf/1/allOf/6/then/properties/properties/contains/properties/binding/properties/type/enum',
            params: {
              allowedValues: [
                'zeebe:calledDecision',
                'zeebe:formDefinition',
                'zeebe:calledElement'
              ]
            },
            message: 'should be equal to one of the allowed values',
            emUsed: true
          },
          {
            keyword: 'const',
            dataPath: '/properties/1/binding/property',
            schemaPath: '#/allOf/1/allOf/6/then/properties/properties/contains/properties/binding/properties/property/const',
            params: {
              allowedValue: 'versionTag'
            },
            message: 'should be equal to constant',
            emUsed: true
          },
          {
            keyword: 'const',
            dataPath: '/properties/2/binding/property',
            schemaPath: '#/allOf/1/allOf/6/then/properties/properties/contains/properties/binding/properties/property/const',
            params: {
              allowedValue: 'versionTag'
            },
            message: 'should be equal to constant',
            emUsed: true
          },
          {
            keyword: 'contains',
            dataPath: '/properties',
            schemaPath: '#/allOf/1/allOf/6/then/properties/properties/contains',
            params: {
              minContains: 1
            },
            message: 'should contain at least 1 valid item(s)',
            emUsed: true
          }
        ]
      },
      message: 'Missing binding with `property`=`versionTag` as binding with `property`=`bindingType` and `value`=`versionTag` is set'
    },
    {
      keyword: 'if',
      dataPath: '',
      schemaPath: '#/allOf/1/allOf/6/if',
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
}
;
