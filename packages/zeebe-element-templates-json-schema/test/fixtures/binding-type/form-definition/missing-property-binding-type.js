export const template = {
  '$schema': 'https://unpkg.com/@camunda/zeebe-element-templates-json-schema/resources/schema.json',
  'name': 'Form Definition with FormId',
  'id': 'formDefinitionWithFormId',
  'appliesTo': [
    'bpmn:Task'
  ],
  'elementType': {
    'value': 'bpmn:UserTask'
  },
  'properties': [
    {
      'type': 'Hidden',
      'binding': {
        'type': 'zeebe:userTask',
      }
    },
    {
      'type': 'Hidden',
      'value': 'aFormId',
      'binding': {
        'type': 'zeebe:formDefinition',
        'property': 'formId'
      }
    },
    {
      'type': 'Hidden',
      'value': 'vers-1',
      'binding': {
        'type': 'zeebe:formDefinition',
        'property': 'versionTag'
      }
    }
  ]
};

export const errors = [
  {
    keyword: 'errorMessage',
    dataPath: '/properties',
    schemaPath: '#/allOf/1/allOf/7/allOf/1/then/properties/properties/errorMessage',
    params: {
      errors: [
        {
          keyword: 'required',
          dataPath: '/properties/0',
          schemaPath: '#/allOf/1/allOf/7/allOf/1/then/properties/properties/contains/required',
          params: {
            missingProperty: 'value'
          },
          message: "should have required property 'value'",
          emUsed: true
        },
        {
          keyword: 'required',
          dataPath: '/properties/0/binding',
          schemaPath: '#/allOf/1/allOf/7/allOf/1/then/properties/properties/contains/properties/binding/required',
          params: {
            missingProperty: 'property'
          },
          message: "should have required property 'property'",
          emUsed: true
        },
        {
          keyword: 'const',
          dataPath: '/properties/1/binding/property',
          schemaPath: '#/allOf/1/allOf/7/allOf/1/then/properties/properties/contains/properties/binding/properties/property/const',
          params: {
            allowedValue: 'bindingType'
          },
          message: 'should be equal to constant',
          emUsed: true
        },
        {
          keyword: 'const',
          dataPath: '/properties/1/value',
          schemaPath: '#/allOf/1/allOf/7/allOf/1/then/properties/properties/contains/properties/value/const',
          params: {
            allowedValue: 'versionTag'
          },
          message: 'should be equal to constant',
          emUsed: true
        },
        {
          keyword: 'const',
          dataPath: '/properties/2/binding/property',
          schemaPath: '#/allOf/1/allOf/7/allOf/1/then/properties/properties/contains/properties/binding/properties/property/const',
          params: {
            allowedValue: 'bindingType'
          },
          message: 'should be equal to constant',
          emUsed: true
        },
        {
          keyword: 'const',
          dataPath: '/properties/2/value',
          schemaPath: '#/allOf/1/allOf/7/allOf/1/then/properties/properties/contains/properties/value/const',
          params: {
            allowedValue: 'versionTag'
          },
          message: 'should be equal to constant',
          emUsed: true
        },
        {
          keyword: 'contains',
          dataPath: '/properties',
          schemaPath: '#/allOf/1/allOf/7/allOf/1/then/properties/properties/contains',
          params: {
            minContains: 1
          },
          message: 'should contain at least 1 valid item(s)',
          emUsed: true
        }
      ]
    },
    message: 'Binding with property=`bindingType` and value=`versionTag` must be set when using a binding with property=`versionTag`'
  },
  {
    keyword: 'if',
    dataPath: '',
    schemaPath: '#/allOf/1/allOf/7/allOf/1/if',
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
