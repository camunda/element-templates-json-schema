export const template = {
  '$schema': 'https://unpkg.com/@camunda/zeebe-element-templates-json-schema/resources/schema.json',
  'name': 'AdHoc Missing Output Collection',
  'id': 'io.camunda.examples.AdHoc.InvalidFeelOutputCollection',
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
      'type': 'String',
      'binding': { 'type': 'zeebe:adHoc', 'property': 'outputCollection' },
      'feel': 'optional',
      'value': '={ id: toolCall._meta.id, name: toolCall._meta.name, content: toolCallResult }'
    },
    {
      'type': 'Text',
      'feel': 'required',
      'binding': { 'type': 'zeebe:adHoc', 'property': 'outputElement' },
      'value': '={ id: toolCall._meta.id, name: toolCall._meta.name, content: toolCallResult }'
    }
  ]
};

export const errors =         [
    {
      keyword: "errorMessage",
      dataPath: "/properties/1",
      schemaPath: "#/allOf/1/items/allOf/23/allOf/1/then/errorMessage",
      params: {
        errors: [
          {
            keyword: "not",
            dataPath: "/properties/1",
            schemaPath: "#/allOf/1/items/allOf/23/allOf/1/then/not",
            params: {},
            message: "should NOT be valid",
            emUsed: true
          }
        ]
      },
      message: "Property \"outputCollection\" cannot be a FEEL expression"
    },
    {
      keyword: "if",
      dataPath: "/properties/1",
      schemaPath: "#/allOf/1/items/allOf/23/allOf/1/if",
      params: {
        failingKeyword: "then"
      },
      message: "should match \"then\" schema"
    },
    {
      keyword: "type",
      dataPath: "",
      schemaPath: "#/oneOf/1/type",
      params: {
        type: "array"
      },
      message: "should be array"
    },
    {
      keyword: "oneOf",
      dataPath: "",
      schemaPath: "#/oneOf",
      params: {
        passingSchemas: null
      },
      message: "should match exactly one schema in oneOf"
    }
  ]
;
