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
  'elementType': {
    'value': 'bpmn:BusinessRuleTask'
  },
  'properties': [
    {
      'type': 'Hidden',
      'value': 'aValue',
      'binding': {
        'type': 'zeebe:calledDecision',
        'property': 'youShallNotPass'
      }
    }
  ]
};

export const errors = [
  {
    keyword: 'errorMessage',
    dataPath: '/properties/0/binding/property',
    schemaPath: '#/allOf/1/allOf/5/then/allOf/0/properties/properties/contains/properties/binding/properties/property/errorMessage',
    params: {
      errors: [
        {
          keyword: 'const',
          dataPath: '/properties/0/binding/property',
          schemaPath: '#/allOf/1/allOf/5/then/allOf/0/properties/properties/contains/properties/binding/properties/property/const',
          params: { allowedValue: 'decisionId' },
          message: 'should be equal to constant',
          emUsed: true,
        },
      ],
    },
    message: 'Binding type "zeebe:calledDecision" must contain property "decisionId"',
  },
  {
    keyword: 'contains',
    dataPath: '/properties',
    schemaPath: '#/allOf/1/allOf/5/then/allOf/0/properties/properties/contains',
    params: { minContains: 1 },
    message: 'should contain at least 1 valid item(s)',
  },
  {
    keyword: 'errorMessage',
    dataPath: '/properties/0/binding/property',
    schemaPath: '#/allOf/1/allOf/5/then/allOf/1/properties/properties/contains/properties/binding/properties/property/errorMessage',
    params: {
      errors: [
        {
          keyword: 'const',
          dataPath: '/properties/0/binding/property',
          schemaPath: '#/allOf/1/allOf/5/then/allOf/1/properties/properties/contains/properties/binding/properties/property/const',
          params: { allowedValue: 'resultVariable' },
          message: 'should be equal to constant',
          emUsed: true,
        },
      ],
    },
    message: 'Binding type "zeebe:calledDecision" must contain property "resultVariable"',
  },
  {
    keyword: 'contains',
    dataPath: '/properties',
    schemaPath: '#/allOf/1/allOf/5/then/allOf/1/properties/properties/contains',
    params: { minContains: 1 },
    message: 'should contain at least 1 valid item(s)',
  },
  {
    keyword: 'if',
    dataPath: '',
    schemaPath: '#/allOf/1/allOf/5/if',
    params: { failingKeyword: 'then' },
    message: 'should match "then" schema',
  },
  {
    keyword: 'enum',
    dataPath: '/properties/0/binding/property',
    schemaPath: '#/allOf/1/items/properties/binding/allOf/7/then/properties/property/enum',
    params: { allowedValues: [ 'decisionId', 'resultVariable', 'versionTag' , 'bindingType' ] },
    message: 'should be equal to one of the allowed values',
  },
  {
    keyword: 'if',
    dataPath: '/properties/0/binding',
    schemaPath: '#/allOf/1/items/properties/binding/allOf/7/if',
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
