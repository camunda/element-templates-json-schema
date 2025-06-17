export const template = {
  '$schema': 'https://unpkg.com/@camunda/zeebe-element-templates-json-schema/resources/schema.json',
  'name': 'Reusable Rule Template',
  'id': 'io.camunda.examples.Decision',
  'description': 'A reusable rule template',
  'version': 1,
  'engines': {
    'camunda': '^8.6'
  },
  'appliesTo': [
    'bpmn:Task'
  ],
  'properties': [
    {
      'type': 'Hidden',
      'value': 'aReusableRule',
      'binding': {
        'type': 'zeebe:calledDecision',
        'property': 'decisionId'
      }
    },
    {
      'type': 'Hidden',
      'value': 'aResultVariable',
      'binding': {
        'type': 'zeebe:calledDecision',
        'property': 'resultVariable'
      }
    }
  ]
};

export const errors = [
  {
    keyword: 'required',
    dataPath: '',
    schemaPath: '#/allOf/1/allOf/5/then/anyOf/0/required',
    params: { missingProperty: 'elementType' },
    message: "should have required property 'elementType'",
  },
  {
    keyword: 'const',
    dataPath: '/appliesTo',
    schemaPath: '#/allOf/1/allOf/5/then/anyOf/1/properties/appliesTo/const',
    params: { allowedValue: [ 'bpmn:BusinessRuleTask' ] },
    message: 'should be equal to constant',
  },
  {
    keyword: 'anyOf',
    dataPath: '',
    schemaPath: '#/allOf/1/allOf/5/then/anyOf',
    params: {},
    message: 'should match some schema in anyOf',
  },
  {
    keyword: 'if',
    dataPath: '',
    schemaPath: '#/allOf/1/allOf/5/if',
    params: { failingKeyword: 'then' },
    message: 'should match "then" schema',
  },
  {
    keyword: 'type',
    dataPath: '',
    schemaPath: '#/oneOf/1/type',
    params: { type: 'array' },
    message: 'should be array',
  },
  {
    keyword: 'oneOf',
    dataPath: '',
    schemaPath: '#/oneOf',
    params: { passingSchemas: null },
    message: 'should match exactly one schema in oneOf',
  },
];

