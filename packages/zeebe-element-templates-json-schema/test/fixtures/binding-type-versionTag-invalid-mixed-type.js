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
    },
    {
      'type': 'Hidden',
      'value': 'vers-1',
      'binding': {
        'type': 'zeebe:formDefinition',
        'property': 'versionTag'
      }
    }
  ]
};

// there is no explicit rule to catch this. either add it or remove this test.
export const errors = [
  {
    keyword: 'errorMessage',
    dataPath: '',
    schemaPath: '#/allOf/1/allOf/4/then/allOf/0/errorMessage',
    params: {
      errors: [
        {
          keyword: 'const',
          dataPath: '/properties/0/binding/type',
          schemaPath: '#/allOf/1/allOf/4/then/allOf/0/properties/properties/contains/properties/binding/properties/type/const',
          params: {
            allowedValue: 'zeebe:userTask'
          },
          message: 'should be equal to constant',
          emUsed: true
        },
        {
          keyword: 'const',
          dataPath: '/properties/1/binding/type',
          schemaPath: '#/allOf/1/allOf/4/then/allOf/0/properties/properties/contains/properties/binding/properties/type/const',
          params: {
            allowedValue: 'zeebe:userTask'
          },
          message: 'should be equal to constant',
          emUsed: true
        },
        {
          keyword: 'const',
          dataPath: '/properties/2/binding/type',
          schemaPath: '#/allOf/1/allOf/4/then/allOf/0/properties/properties/contains/properties/binding/properties/type/const',
          params: {
            allowedValue: 'zeebe:userTask'
          },
          message: 'should be equal to constant',
          emUsed: true
        },
        {
          keyword: 'const',
          dataPath: '/properties/3/binding/type',
          schemaPath: '#/allOf/1/allOf/4/then/allOf/0/properties/properties/contains/properties/binding/properties/type/const',
          params: {
            allowedValue: 'zeebe:userTask'
          },
          message: 'should be equal to constant',
          emUsed: true
        },
        {
          keyword: 'contains',
          dataPath: '/properties',
          schemaPath: '#/allOf/1/allOf/4/then/allOf/0/properties/properties/contains',
          params: {
            minContains: 1
          },
          message: 'should contain at least 1 valid item(s)',
          emUsed: true
        }
      ]
    },
    message: 'When using "zeebe:formDefinition", "zeebe:userTask" must be set on the same element'
  },
  {
    keyword: 'if',
    dataPath: '',
    schemaPath: '#/allOf/1/allOf/4/if',
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