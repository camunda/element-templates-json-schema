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
      'value': 'io.camunda:decisionTask',
      'binding': {
        'type': 'zeebe:taskDefinition:type'
      },
      'type': 'Hidden'
    },
  ]
};

export const errors = [
  {
    'keyword': 'errorMessage',
    'dataPath': '',
    'schemaPath': '#/allOf/1/allOf/4/then/allOf/2/errorMessage',
    'params': {
      'errors': [
        {
          'keyword': 'not',
          'dataPath': '',
          'schemaPath': '#/allOf/1/allOf/4/then/allOf/2/not',
          'params': {},
          'message': 'should NOT be valid',
          'emUsed': true
        }
      ]
    },
    'message': 'Binding type "zeebe:taskDefinition" or "zeebe:taskDefinition:type" cannot be set when binding type "zeebe:calledDecision" is set.'
  },
  {
    'keyword': 'if',
    'dataPath': '',
    'schemaPath': '#/allOf/1/allOf/4/if',
    'params': {
      'failingKeyword': 'then'
    },
    'message': 'should match "then" schema'
  },
  {
    'keyword': 'type',
    'dataPath': '',
    'schemaPath': '#/oneOf/1/type',
    'params': {
      'type': 'array'
    },
    'message': 'should be array'
  },
  {
    'keyword': 'oneOf',
    'dataPath': '',
    'schemaPath': '#/oneOf',
    'params': {
      'passingSchemas': null
    },
    'message': 'should match exactly one schema in oneOf'
  }
];
