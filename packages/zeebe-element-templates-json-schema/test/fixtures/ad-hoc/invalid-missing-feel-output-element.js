export const template = {
  '$schema': 'https://unpkg.com/@camunda/zeebe-element-templates-json-schema/resources/schema.json',
  'name': 'AdHoc Template',
  'id': 'io.camunda.examples.AdHoc.Valid',
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
    },
    {
      'type': 'String',
      'binding': { 'type': 'zeebe:adHoc', 'property': 'outputElement' },
      'value': '={ id: toolCall._meta.id, name: toolCall._meta.name, content: toolCallResult }'
    }
  ]
};

export const errors = [
  {
    keyword: 'required',
    dataPath: '/properties/2',
    schemaPath: '#/allOf/2/allOf/3/then/properties/properties/items/then/required',
    params: {
      missingProperty: 'feel'
    },
    message: "should have required property 'feel'"
  },
  {
    keyword: 'if',
    dataPath: '/properties/2',
    schemaPath: '#/allOf/2/allOf/3/then/properties/properties/items/if',
    params: {
      failingKeyword: 'then'
    },
    message: 'should match "then" schema'
  },
  {
    keyword: 'if',
    dataPath: '',
    schemaPath: '#/allOf/2/allOf/3/if',
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