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
    'bpmn:Task',
    'bpmn:BusinessRuleTask'
  ],
  'elementType': {
    'value': 'bpmn:BusinessRuleTask'
  },
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
    },
    {
      'type': 'Hidden',
      'value': 'versionTag',
      'binding': {
        'type': 'zeebe:calledDecision',
        'property': 'bindingType'
      }
    }
  ]
};

export const errors = [
  {
    keyword: 'const',
    dataPath: '/properties/0/binding/property',
    schemaPath: '#/allOf/1/allOf/6/then/properties/properties/contains/properties/binding/properties/property/const',
    params: {
      allowedValue: 'versionTag'
    },
    message: 'should be equal to constant'
  },
  {
    keyword: 'const',
    dataPath: '/properties/1/binding/property',
    schemaPath: '#/allOf/1/allOf/6/then/properties/properties/contains/properties/binding/properties/property/const',
    params: {
      allowedValue: 'versionTag'
    },
    message: 'should be equal to constant'
  },
  {
    keyword: 'const',
    dataPath: '/properties/2/binding/property',
    schemaPath: '#/allOf/1/allOf/6/then/properties/properties/contains/properties/binding/properties/property/const',
    params: {
      allowedValue: 'versionTag'
    },
    message: 'should be equal to constant'
  },
  {
    keyword: 'contains',
    dataPath: '/properties',
    schemaPath: '#/allOf/1/allOf/6/then/properties/properties/contains',
    params: {
      minContains: 1
    },
    message: 'should contain at least 1 valid item(s)'
  },
  {
    keyword: 'if',
    dataPath: '',
    schemaPath: '#/allOf/1/allOf/6/if',
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
]
;
