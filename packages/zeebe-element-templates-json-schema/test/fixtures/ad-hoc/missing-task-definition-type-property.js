export const template = {
  '$schema': 'https://unpkg.com/@camunda/zeebe-element-templates-json-schema/resources/schema.json',
  'name': 'AdHoc Template',
  'id': 'io.camunda.examples.AdHoc.MissingTaskDefinitionTypeProperty',
  'version': 1,
  'appliesTo': [ 'bpmn:AdHocSubProcess' ],
  'elementType': { 'value': 'bpmn:AdHocSubProcess' },
  'properties': [
    {
      'type': 'Hidden',
      'binding': { 'type': 'zeebe:taskDefinition', 'property': 'retries' },
      'value': '4'
    },
    {
      'type': 'Hidden',
      'binding': { 'type': 'zeebe:adHoc', 'property': 'outputCollection' },
      'value': 'toolCallResults'
    },
    {
      'type': 'String',
      'binding': { 'type': 'zeebe:adHoc', 'property': 'outputElement' },
      'feel': 'required',
      'value': '={ id: toolCall._meta.id, name: toolCall._meta.name, content: toolCallResult }'
    }
  ]
};

export const errors = [
  {
    keyword: 'errorMessage',
    dataPath: '/properties',
    schemaPath: '#/allOf/1/allOf/9/allOf/1/then/properties/properties/allOf/2/errorMessage',
    params: {
      errors: [
        {
          keyword: 'const',
          dataPath: '/properties/0/binding/property',
          schemaPath: '#/allOf/1/allOf/9/allOf/1/then/properties/properties/allOf/2/contains/properties/binding/properties/property/const',
          params: {
            allowedValue: 'type'
          },
          message: 'should be equal to constant',
          emUsed: true
        },
        {
          keyword: 'const',
          dataPath: '/properties/1/binding/type',
          schemaPath: '#/allOf/1/allOf/9/allOf/1/then/properties/properties/allOf/2/contains/properties/binding/properties/type/const',
          params: {
            allowedValue: 'zeebe:taskDefinition'
          },
          message: 'should be equal to constant',
          emUsed: true
        },
        {
          keyword: 'const',
          dataPath: '/properties/1/binding/property',
          schemaPath: '#/allOf/1/allOf/9/allOf/1/then/properties/properties/allOf/2/contains/properties/binding/properties/property/const',
          params: {
            allowedValue: 'type'
          },
          message: 'should be equal to constant',
          emUsed: true
        },
        {
          keyword: 'const',
          dataPath: '/properties/2/binding/type',
          schemaPath: '#/allOf/1/allOf/9/allOf/1/then/properties/properties/allOf/2/contains/properties/binding/properties/type/const',
          params: {
            allowedValue: 'zeebe:taskDefinition'
          },
          message: 'should be equal to constant',
          emUsed: true
        },
        {
          keyword: 'const',
          dataPath: '/properties/2/binding/property',
          schemaPath: '#/allOf/1/allOf/9/allOf/1/then/properties/properties/allOf/2/contains/properties/binding/properties/property/const',
          params: {
            allowedValue: 'type'
          },
          message: 'should be equal to constant',
          emUsed: true
        },
        {
          keyword: 'contains',
          dataPath: '/properties',
          schemaPath: '#/allOf/1/allOf/9/allOf/1/then/properties/properties/allOf/2/contains',
          params: {
            minContains: 1
          },
          message: 'should contain at least 1 valid item(s)',
          emUsed: true
        }
      ]
    },
    message: 'When using "zeebe:adHoc" with properties "outputCollection" and "outputElement", "zeebe:taskDefinition" with property="type" must be set on the same element'
  },
  {
    keyword: 'if',
    dataPath: '',
    schemaPath: '#/allOf/1/allOf/9/allOf/1/if',
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
