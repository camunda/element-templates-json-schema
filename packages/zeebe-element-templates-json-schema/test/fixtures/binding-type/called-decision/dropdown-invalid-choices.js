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
      'type': 'Dropdown',
      'label': 'Binding',
      'id': 'bindingType',
      'binding': {
        'type': 'zeebe:calledDecision',
        'property': 'bindingType'
      },
      'choices': [
        {
          'name': 'Latest',
          'value': 'foo'
        },
        {
          'name': 'Deployment',
          'value': 'bar'
        },
        {
          'name': 'Version Tag',
          'value': 'baz'
        }
      ],
      'value': 'latest',
    },
    {
      'type': 'String',
      'label': 'Version tag',
      'binding': {
        'type': 'zeebe:calledDecision',
        'property': 'versionTag'
      },
      'condition': {
        'property': 'bindingType',
        'equals': 'versionTag'
      }
    }
  ]
};

export const errors = [
  {
    keyword: 'enum',
    dataPath: '/properties/2/choices/0/value',
    schemaPath: '#/allOf/1/items/allOf/20/allOf/0/then/properties/choices/items/properties/value/enum',
    params: {
      allowedValues: [
        'latest',
        'versionTag',
        'deployment'
      ]
    },
    message: 'should be equal to one of the allowed values'
  },
  {
    keyword: 'enum',
    dataPath: '/properties/2/choices/1/value',
    schemaPath: '#/allOf/1/items/allOf/20/allOf/0/then/properties/choices/items/properties/value/enum',
    params: {
      allowedValues: [
        'latest',
        'versionTag',
        'deployment'
      ]
    },
    message: 'should be equal to one of the allowed values'
  },
  {
    keyword: 'enum',
    dataPath: '/properties/2/choices/2/value',
    schemaPath: '#/allOf/1/items/allOf/20/allOf/0/then/properties/choices/items/properties/value/enum',
    params: {
      allowedValues: [
        'latest',
        'versionTag',
        'deployment'
      ]
    },
    message: 'should be equal to one of the allowed values'
  },
  {
    keyword: 'if',
    dataPath: '/properties/2',
    schemaPath: '#/allOf/1/items/allOf/20/allOf/0/if',
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