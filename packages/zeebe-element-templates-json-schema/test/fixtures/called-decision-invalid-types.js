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
      'type': 'Number',
      'value': 1,
      'binding': {
        'type': 'zeebe:calledDecision',
        'property': 'decisionId'
      }
    },
    {
      'type': 'Number',
      'value': 1,
      'binding': {
        'type': 'zeebe:calledDecision',
        'property': 'resultVariable'
      }
    },
    {
      'type': 'Boolean',
      'value': true,
      'binding': {
        'type': 'zeebe:calledDecision',
        'property': 'resultVariable'
      }
    },
    {
      'type': 'Boolean',
      'value': false,
      'binding': {
        'type': 'zeebe:calledDecision',
        'property': 'decisionId'
      }
    }
  ]
};

export const errors = [
  {
    keyword: 'enum',
    dataPath: '/properties/0/type',
    schemaPath: '#/allOf/1/items/allOf/16/then/properties/type/enum',
    params: {
      allowedValues: [
        'Hidden',
        'String',
        'Text',
        'Dropdown'
      ]
    },
    message: 'should be equal to one of the allowed values'
  },
  {
    keyword: 'if',
    dataPath: '/properties/0',
    schemaPath: '#/allOf/1/items/allOf/16/if',
    params: {
      failingKeyword: 'then'
    },
    message: 'should match "then" schema'
  },
  {
    keyword: 'enum',
    dataPath: '/properties/1/type',
    schemaPath: '#/allOf/1/items/allOf/16/then/properties/type/enum',
    params: {
      allowedValues: [
        'Hidden',
        'String',
        'Text',
        'Dropdown'
      ]
    },
    message: 'should be equal to one of the allowed values'
  },
  {
    keyword: 'if',
    dataPath: '/properties/1',
    schemaPath: '#/allOf/1/items/allOf/16/if',
    params: {
      failingKeyword: 'then'
    },
    message: 'should match "then" schema'
  },
  {
    keyword: 'enum',
    dataPath: '/properties/2/type',
    schemaPath: '#/allOf/1/items/allOf/16/then/properties/type/enum',
    params: {
      allowedValues: [
        'Hidden',
        'String',
        'Text',
        'Dropdown'
      ]
    },
    message: 'should be equal to one of the allowed values'
  },
  {
    keyword: 'if',
    dataPath: '/properties/2',
    schemaPath: '#/allOf/1/items/allOf/16/if',
    params: {
      failingKeyword: 'then'
    },
    message: 'should match "then" schema'
  },
  {
    keyword: 'enum',
    dataPath: '/properties/3/type',
    schemaPath: '#/allOf/1/items/allOf/16/then/properties/type/enum',
    params: {
      allowedValues: [
        'Hidden',
        'String',
        'Text',
        'Dropdown'
      ]
    },
    message: 'should be equal to one of the allowed values'
  },
  {
    keyword: 'if',
    dataPath: '/properties/3',
    schemaPath: '#/allOf/1/items/allOf/16/if',
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