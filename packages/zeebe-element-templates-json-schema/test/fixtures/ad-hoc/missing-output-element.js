export const template = {
  '$schema': 'https://unpkg.com/@camunda/zeebe-element-templates-json-schema/resources/schema.json',
  'name': 'AdHoc Missing Output Element',
  'id': 'io.camunda.examples.AdHoc.MissingOutputElement',
  'version': 1,
  'appliesTo': [ 'bpmn:AdHocSubProcess' ],
  'elementType': { 'value': 'bpmn:AdHocSubProcess' },
  'properties': [
    {
      'type': 'Hidden',
      'binding': { 'type': 'zeebe:taskDefinition', 'property': 'type' },
      'value': 'io.camunda.agenticai:aiagent-job-worker:1'
    },
    {
      'type': 'Hidden',
      'binding': { 'type': 'zeebe:adHoc', 'property': 'outputCollection' },
      'value': 'toolCallResults'
    }
  ]
};

export const errors = [
  {
    keyword: 'const',
    dataPath: '/properties/0/binding/type',
    schemaPath: '#/allOf/1/allOf/10/then/properties/properties/contains/properties/binding/properties/type/const',
    params: { allowedValue: 'zeebe:adHoc' },
    message: 'should be equal to constant'
  },
  {
    keyword: 'const',
    dataPath: '/properties/0/binding/property',
    schemaPath: '#/allOf/1/allOf/10/then/properties/properties/contains/properties/binding/properties/property/const',
    params: { allowedValue: 'outputElement' },
    message: 'should be equal to constant'
  },
  {
    keyword: 'const',
    dataPath: '/properties/1/binding/property',
    schemaPath: '#/allOf/1/allOf/10/then/properties/properties/contains/properties/binding/properties/property/const',
    params: { allowedValue: 'outputElement' },
    message: 'should be equal to constant'
  },
  {
    keyword: 'contains',
    dataPath: '/properties',
    schemaPath: '#/allOf/1/allOf/10/then/properties/properties/contains',
    params: { minContains: 1 },
    message: 'should contain at least 1 valid item(s)'
  },
  {
    keyword: 'if',
    dataPath: '',
    schemaPath: '#/allOf/1/allOf/10/if',
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
