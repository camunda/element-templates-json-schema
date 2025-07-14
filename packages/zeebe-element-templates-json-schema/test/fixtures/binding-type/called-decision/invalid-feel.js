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
      'value': 'deployment',
      'choices': [
        {
          'value': 'deployment',
          'name': 'Deployment'
        },
        {
          'value': 'versionTag',
          'name': 'Version Tag'
        } ],
      'feel': 'static',
      'binding': {
        'type': 'zeebe:calledDecision',
        'property': 'bindingType'
      }
    },
    {
      'type': 'Hidden',
      'value': 'deployment',
      'feel': 'required',
      'binding': {
        'type': 'zeebe:calledDecision',
        'property': 'bindingType'
      }
    }
  ]
};

// This just catching a transitive error as Hidden and Dropdown cannot be feel anyways.
export const errors = [
  {
    keyword: 'errorMessage',
    dataPath: '/properties/2/type',
    schemaPath: '#/allOf/1/items/allOf/4/then/properties/type/errorMessage',
    params: {
      errors: [
        {
          keyword: 'enum',
          dataPath: '/properties/2/type',
          schemaPath: '#/allOf/1/items/allOf/4/then/properties/type/enum',
          params: {
            allowedValues: [
              'String',
              'Text',
              'Number',
              'Boolean'
            ]
          },
          message: 'should be equal to one of the allowed values',
          emUsed: true
        }
      ]
    },
    message: 'feel is only supported for "String", "Text", "Number" and "Boolean" type'
  },
  {
    keyword: 'if',
    dataPath: '/properties/2',
    schemaPath: '#/allOf/1/items/allOf/4/if',
    params: {
      failingKeyword: 'then'
    },
    message: 'should match "then" schema'
  },
  {
    keyword: 'errorMessage',
    dataPath: '/properties/3/type',
    schemaPath: '#/allOf/1/items/allOf/4/then/properties/type/errorMessage',
    params: {
      errors: [
        {
          keyword: 'enum',
          dataPath: '/properties/3/type',
          schemaPath: '#/allOf/1/items/allOf/4/then/properties/type/enum',
          params: {
            allowedValues: [
              'String',
              'Text',
              'Number',
              'Boolean'
            ]
          },
          message: 'should be equal to one of the allowed values',
          emUsed: true
        }
      ]
    },
    message: 'feel is only supported for "String", "Text", "Number" and "Boolean" type'
  },
  {
    keyword: 'if',
    dataPath: '/properties/3',
    schemaPath: '#/allOf/1/items/allOf/4/if',
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
