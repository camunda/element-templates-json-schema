export const template = {
    '$schema': 'https://unpkg.com/@camunda/zeebe-element-templates-json-schema/resources/schema.json',
    'name': 'AdHoc Template',
    'id': 'io.camunda.examples.AdHoc.Valid',
    'version': 1,
    'appliesTo': [ 'bpmn:Activity' ],
    'elementType': { 'value': 'bpmn:' },
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
            'feel': 'required',
            'value': '={ id: toolCall._meta.id, name: toolCall._meta.name, content: toolCallResult }'
        }
    ]
};

export const errors = [
    {
        keyword: "errorMessage",
        dataPath: "/elementType/value",
        schemaPath: "#/allOf/0/properties/elementType/properties/value/errorMessage",
        params: {
            errors: [
                {
                    keyword: "pattern",
                    dataPath: "/elementType/value",
                    schemaPath: "#/allOf/0/properties/elementType/properties/value/pattern",
                    params: {
                        pattern: "^[\\w\\d]+:[\\w\\d]+$"
                    },
                    message: "should match pattern \"^[\\w\\d]+:[\\w\\d]+$\"",
                    emUsed: true
                }
            ]
        },
        message: "invalid item for \"elementType\", should contain namespaced property, example: \"bpmn:Task\""
    },
    {
        keyword: "const",
        dataPath: "/elementType/value",
        schemaPath: "#/allOf/1/allOf/9/then/anyOf/0/properties/elementType/properties/value/const",
        params: {
            allowedValue: "bpmn:AdHocSubProcess"
        },
        message: "should be equal to constant"
    },
    {
        keyword: "const",
        dataPath: "/appliesTo",
        schemaPath: "#/allOf/1/allOf/9/then/anyOf/1/properties/appliesTo/const",
        params: {
            allowedValue: [
                "bpmn:AdHocSubProcess"
            ]
        },
        message: "should be equal to constant"
    },
    {
        keyword: "anyOf",
        dataPath: "",
        schemaPath: "#/allOf/1/allOf/9/then/anyOf",
        params: {},
        message: "should match some schema in anyOf"
    },
    {
        keyword: "if",
        dataPath: "",
        schemaPath: "#/allOf/1/allOf/9/if",
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
