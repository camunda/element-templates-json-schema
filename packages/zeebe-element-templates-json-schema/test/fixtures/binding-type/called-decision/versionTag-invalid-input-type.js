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
      'type': 'Number',
      'value': 1,
      'binding': {
        'type': 'zeebe:calledDecision',
        'property': 'versionTag'
      }
    },
    {
      'type': 'Boolean',
      'value': true,
      'binding': {
        'type': 'zeebe:calledDecision',
        'property': 'versionTag'
      }
    }
  ]
};

export const errors = [
  {
    keyword: 'errorMessage',
    dataPath: '/properties/3/type',
    schemaPath: '#/allOf/1/items/allOf/20/allOf/1/then/allOf/0/properties/type/errorMessage',
    params: {
      errors: [
        {
          keyword: 'enum',
          dataPath: '/properties/3/type',
          schemaPath: '#/allOf/1/items/allOf/20/allOf/1/then/allOf/0/properties/type/enum',
          params: {
            allowedValues: [
              'Hidden',
              'Dropdown',
              'String',
              'Text'
            ]
          },
          message: 'should be equal to one of the allowed values',
          emUsed: true
        }
      ]
    },
    message: 'Incorrect type "Number". Must be one of { String, Text, Hidden, Dropdown } for binding with `property`=`versionTag`'
  },
  {
    keyword: 'if',
    dataPath: '/properties/3',
    schemaPath: '#/allOf/1/items/allOf/20/allOf/1/if',
    params: {
      failingKeyword: 'then'
    },
    message: 'should match "then" schema'
  },
  {
    keyword: 'errorMessage',
    dataPath: '/properties/4/type',
    schemaPath: '#/allOf/1/items/allOf/20/allOf/1/then/allOf/0/properties/type/errorMessage',
    params: {
      errors: [
        {
          keyword: 'enum',
          dataPath: '/properties/4/type',
          schemaPath: '#/allOf/1/items/allOf/20/allOf/1/then/allOf/0/properties/type/enum',
          params: {
            allowedValues: [
              'Hidden',
              'Dropdown',
              'String',
              'Text'
            ]
          },
          message: 'should be equal to one of the allowed values',
          emUsed: true
        }
      ]
    },
    message: 'Incorrect type "Boolean". Must be one of { String, Text, Hidden, Dropdown } for binding with `property`=`versionTag`'
  },
  {
    keyword: 'if',
    dataPath: '/properties/4',
    schemaPath: '#/allOf/1/items/allOf/20/allOf/1/if',
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