export const template = {
  '$schema': 'https://unpkg.com/@camunda/zeebe-element-templates-json-schema/resources/schema.json',
  'name': 'Form Definition with FormId',
  'id': 'formDefinitionWithFormId',
  'appliesTo': [
    'bpmn:Task'
  ],
  'elementType': {
    'value': 'bpmn:ServiceTask'
  },
  'properties': [
    {
      'type': 'Hidden',
      'value': 'vers-1',
      'binding': {
        'type': 'zeebe:linkedResource',
        'linkName': 'persistedLink',
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
          keyword: 'const',
          dataPath: '/properties/0/binding/property',
          schemaPath: '#/allOf/1/allOf/7/allOf/1/then/properties/properties/contains/properties/binding/properties/property/const',
          params: {
            allowedValue: 'bindingType'
          },
          message: 'should be equal to constant',
          emUsed: true
        },
        {
          keyword: 'const',
          dataPath: '/properties/0/value',
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
