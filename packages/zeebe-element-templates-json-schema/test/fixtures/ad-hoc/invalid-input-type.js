export const template = {
  '$schema': 'https://unpkg.com/@camunda/zeebe-element-templates-json-schema/resources/schema.json',
  'name': 'AdHoc Template',
  'id': 'io.camunda.examples.AdHoc.InvalidInputType',
  'version': 1,
  'appliesTo': ['bpmn:AdHocSubProcess'],
  'elementType': {'value': 'bpmn:AdHocSubProcess'},
  'properties': [
    {
      'type': 'Hidden',
      'binding': {'type': 'zeebe:taskDefinition', 'property': 'type'},
      'value': 'io.camunda.agenticai:aiagent-job-worker:1'
    },
    {
      'type': 'Number',
      'binding': {'type': 'zeebe:adHoc', 'property': 'outputCollection'},
      'value': 'toolCallResults'
    },
    {
      'type': 'Boolean',
      'binding': {'type': 'zeebe:adHoc', 'property': 'outputCollection'},
      'value': 'toolCallResults'
    },
    {
      'type': 'Number',
      'binding': {'type': 'zeebe:adHoc', 'property': 'outputElement'},
      'value': '={ id: toolCall._meta.id, name: toolCall._meta.name, content: toolCallResult }'
    },
    {
      'type': 'Number',
      'binding': {'type': 'zeebe:adHoc', 'property': 'outputElement'},
      'value': '={ id: toolCall._meta.id, name: toolCall._meta.name, content: toolCallResult }'
    }
  ]
};

export const errors = [
  {
    keyword: "enum",
    dataPath: "/properties/1/type",
    schemaPath: "#/allOf/1/items/allOf/23/then/properties/type/enum",
    params: {
      allowedValues: [
        "Hidden",
        "String",
        "Text",
        "Dropdown"
      ]
    },
    message: "should be equal to one of the allowed values"
  },
  {
    keyword: "if",
    dataPath: "/properties/1",
    schemaPath: "#/allOf/1/items/allOf/23/if",
    params: {
      failingKeyword: "then"
    },
    message: "should match \"then\" schema"
  },
  {
    keyword: "enum",
    dataPath: "/properties/2/type",
    schemaPath: "#/allOf/1/items/allOf/23/then/properties/type/enum",
    params: {
      allowedValues: [
        "Hidden",
        "String",
        "Text",
        "Dropdown"
      ]
    },
    message: "should be equal to one of the allowed values"
  },
  {
    keyword: "if",
    dataPath: "/properties/2",
    schemaPath: "#/allOf/1/items/allOf/23/if",
    params: {
      failingKeyword: "then"
    },
    message: "should match \"then\" schema"
  },
  {
    keyword: "enum",
    dataPath: "/properties/3/type",
    schemaPath: "#/allOf/1/items/allOf/23/then/properties/type/enum",
    params: {
      allowedValues: [
        "Hidden",
        "String",
        "Text",
        "Dropdown"
      ]
    },
    message: "should be equal to one of the allowed values"
  },
  {
    keyword: "if",
    dataPath: "/properties/3",
    schemaPath: "#/allOf/1/items/allOf/23/if",
    params: {
      failingKeyword: "then"
    },
    message: "should match \"then\" schema"
  },
  {
    keyword: "enum",
    dataPath: "/properties/4/type",
    schemaPath: "#/allOf/1/items/allOf/23/then/properties/type/enum",
    params: {
      allowedValues: [
        "Hidden",
        "String",
        "Text",
        "Dropdown"
      ]
    },
    message: "should be equal to one of the allowed values"
  },
  {
    keyword: "if",
    dataPath: "/properties/4",
    schemaPath: "#/allOf/1/items/allOf/23/if",
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
];
