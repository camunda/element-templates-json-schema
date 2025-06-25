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
    'value': 'bpmn:ScriptTask'
  },
  'properties': [
    {
      'type': 'Hidden',
      'value': '="FEEL Expression"',
      'binding': {
        'type': 'zeebe:script',
        'property': 'expression'
      }
    },
    {
      'type': 'Hidden',
      'value': 'aResultVariable',
      'binding': {
        'type': 'zeebe:script',
        'property': 'resultVariable'
      }
    },
    {
      'value': 'io.camunda:scriptTask',
      'binding': {
        'property': 'type',
        'type': 'zeebe:taskDefinition'
      },
      'type': 'Hidden'
    }
  ]
};

export const errors = [
  {
    'keyword': 'errorMessage',
    'dataPath': '',
    'schemaPath': '#/allOf/1/allOf/6/then/allOf/2/errorMessage',
    'params': {
      'errors': [
        {
          'keyword': 'not',
          'dataPath': '',
          'schemaPath': '#/allOf/1/allOf/6/then/allOf/2/not',
          'params': {},
          'message': 'should NOT be valid',
          'emUsed': true
        }
      ]
    },
    'message': 'Binding type "zeebe:taskDefinition" or "zeebe:taskDefinition:type" cannot be set when binding type "zeebe:script" is set.'
  },
  {
    'keyword': 'if',
    'dataPath': '',
    'schemaPath': '#/allOf/1/allOf/6/if',
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
