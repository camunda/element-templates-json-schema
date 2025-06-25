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
    'bpmn:UserTask',
    'bpmn:CallActivity',
    'bpmn:BusinessRuleTask'
  ],
  'elementType': {
    'value': 'bpmn:Task'
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
        'type': 'zeebe:calledDecision',
        'property': 'versionTag'
      }
    },
    {
      'type': 'Hidden',
      'binding': {
        'type': 'zeebe:userTask',
      }
    },
    {
      'type': 'Hidden',
      'value': 'versionTag',
      'binding': {
        'type': 'zeebe:formDefinition',
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
    },
    {
      'type': 'Hidden',
      'value': 'paymentProcess',
      'binding': {
        'type': 'zeebe:calledElement',
        'property': 'processId'
      }
    },
    {
      'type': 'Hidden',
      'value': 'versionTag',
      'binding': {
        'type': 'zeebe:calledElement',
        'property': 'bindingType'
      }
    },
    {
      'type': 'Hidden',
      'value': 'vers-1',
      'binding': {
        'type': 'zeebe:calledElement',
        'property': 'versionTag'
      }
    }
  ]
};

// there is no explicit rule to catch this. This is covered by existing mutually exclusive requirements
export const errors =
[
  {
    keyword: 'const',
    dataPath: '/elementType/value',
    schemaPath: '#/allOf/1/allOf/2/then/anyOf/0/properties/elementType/properties/value/const',
    params: {
      allowedValue: 'bpmn:CallActivity'
    },
    message: 'should be equal to constant'
  },
  {
    keyword: 'const',
    dataPath: '/appliesTo',
    schemaPath: '#/allOf/1/allOf/2/then/anyOf/1/properties/appliesTo/const',
    params: {
      allowedValue: [
        'bpmn:CallActivity'
      ]
    },
    message: 'should be equal to constant'
  },
  {
    keyword: 'anyOf',
    dataPath: '',
    schemaPath: '#/allOf/1/allOf/2/then/anyOf',
    params: {},
    message: 'should match some schema in anyOf'
  },
  {
    keyword: 'if',
    dataPath: '',
    schemaPath: '#/allOf/1/allOf/2/if',
    params: {
      failingKeyword: 'then'
    },
    message: 'should match "then" schema'
  },
  {
    keyword: 'const',
    dataPath: '/elementType/value',
    schemaPath: '#/allOf/1/allOf/3/then/properties/elementType/properties/value/const',
    params: {
      allowedValue: 'bpmn:UserTask'
    },
    message: 'should be equal to constant'
  },
  {
    keyword: 'if',
    dataPath: '',
    schemaPath: '#/allOf/1/allOf/3/if',
    params: {
      failingKeyword: 'then'
    },
    message: 'should match "then" schema'
  },
  {
    keyword: 'const',
    dataPath: '/elementType/value',
    schemaPath: '#/allOf/1/allOf/5/then/anyOf/0/properties/elementType/properties/value/const',
    params: {
      allowedValue: 'bpmn:BusinessRuleTask'
    },
    message: 'should be equal to constant'
  },
  {
    keyword: 'const',
    dataPath: '/appliesTo',
    schemaPath: '#/allOf/1/allOf/5/then/anyOf/1/properties/appliesTo/const',
    params: {
      allowedValue: [
        'bpmn:BusinessRuleTask'
      ]
    },
    message: 'should be equal to constant'
  },
  {
    keyword: 'anyOf',
    dataPath: '',
    schemaPath: '#/allOf/1/allOf/5/then/anyOf',
    params: {},
    message: 'should match some schema in anyOf'
  },
  {
    keyword: 'if',
    dataPath: '',
    schemaPath: '#/allOf/1/allOf/5/if',
    params: {
      failingKeyword: 'then'
    },
    message: 'should match "then" schema'
  },
  {
    keyword: 'errorMessage',
    dataPath: '/properties',
    schemaPath: '#/allOf/1/allOf/8/then/properties/properties/errorMessage',
    params: {
      errors: [
        {
          keyword: 'const',
          dataPath: '/properties/0/binding/type',
          schemaPath: '#/allOf/1/allOf/8/then/properties/properties/contains/properties/binding/properties/type/const',
          params: {
            allowedValue: 'zeebe:formDefinition'
          },
          message: 'should be equal to constant',
          emUsed: true
        },
        {
          keyword: 'const',
          dataPath: '/properties/0/binding/property',
          schemaPath: '#/allOf/1/allOf/8/then/properties/properties/contains/properties/binding/properties/property/const',
          params: {
            allowedValue: 'formId'
          },
          message: 'should be equal to constant',
          emUsed: true
        },
        {
          keyword: 'const',
          dataPath: '/properties/1/binding/type',
          schemaPath: '#/allOf/1/allOf/8/then/properties/properties/contains/properties/binding/properties/type/const',
          params: {
            allowedValue: 'zeebe:formDefinition'
          },
          message: 'should be equal to constant',
          emUsed: true
        },
        {
          keyword: 'const',
          dataPath: '/properties/1/binding/property',
          schemaPath: '#/allOf/1/allOf/8/then/properties/properties/contains/properties/binding/properties/property/const',
          params: {
            allowedValue: 'formId'
          },
          message: 'should be equal to constant',
          emUsed: true
        },
        {
          keyword: 'const',
          dataPath: '/properties/2/binding/type',
          schemaPath: '#/allOf/1/allOf/8/then/properties/properties/contains/properties/binding/properties/type/const',
          params: {
            allowedValue: 'zeebe:formDefinition'
          },
          message: 'should be equal to constant',
          emUsed: true
        },
        {
          keyword: 'const',
          dataPath: '/properties/2/binding/property',
          schemaPath: '#/allOf/1/allOf/8/then/properties/properties/contains/properties/binding/properties/property/const',
          params: {
            allowedValue: 'formId'
          },
          message: 'should be equal to constant',
          emUsed: true
        },
        {
          keyword: 'const',
          dataPath: '/properties/3/binding/type',
          schemaPath: '#/allOf/1/allOf/8/then/properties/properties/contains/properties/binding/properties/type/const',
          params: {
            allowedValue: 'zeebe:formDefinition'
          },
          message: 'should be equal to constant',
          emUsed: true
        },
        {
          keyword: 'const',
          dataPath: '/properties/3/binding/property',
          schemaPath: '#/allOf/1/allOf/8/then/properties/properties/contains/properties/binding/properties/property/const',
          params: {
            allowedValue: 'formId'
          },
          message: 'should be equal to constant',
          emUsed: true
        },
        {
          keyword: 'required',
          dataPath: '/properties/4/binding',
          schemaPath: '#/allOf/1/allOf/8/then/properties/properties/contains/properties/binding/required',
          params: {
            missingProperty: 'property'
          },
          message: "should have required property 'property'",
          emUsed: true
        },
        {
          keyword: 'const',
          dataPath: '/properties/4/binding/type',
          schemaPath: '#/allOf/1/allOf/8/then/properties/properties/contains/properties/binding/properties/type/const',
          params: {
            allowedValue: 'zeebe:formDefinition'
          },
          message: 'should be equal to constant',
          emUsed: true
        },
        {
          keyword: 'const',
          dataPath: '/properties/5/binding/property',
          schemaPath: '#/allOf/1/allOf/8/then/properties/properties/contains/properties/binding/properties/property/const',
          params: {
            allowedValue: 'formId'
          },
          message: 'should be equal to constant',
          emUsed: true
        },
        {
          keyword: 'const',
          dataPath: '/properties/6/binding/property',
          schemaPath: '#/allOf/1/allOf/8/then/properties/properties/contains/properties/binding/properties/property/const',
          params: {
            allowedValue: 'formId'
          },
          message: 'should be equal to constant',
          emUsed: true
        },
        {
          keyword: 'const',
          dataPath: '/properties/7/binding/type',
          schemaPath: '#/allOf/1/allOf/8/then/properties/properties/contains/properties/binding/properties/type/const',
          params: {
            allowedValue: 'zeebe:formDefinition'
          },
          message: 'should be equal to constant',
          emUsed: true
        },
        {
          keyword: 'const',
          dataPath: '/properties/7/binding/property',
          schemaPath: '#/allOf/1/allOf/8/then/properties/properties/contains/properties/binding/properties/property/const',
          params: {
            allowedValue: 'formId'
          },
          message: 'should be equal to constant',
          emUsed: true
        },
        {
          keyword: 'const',
          dataPath: '/properties/8/binding/type',
          schemaPath: '#/allOf/1/allOf/8/then/properties/properties/contains/properties/binding/properties/type/const',
          params: {
            allowedValue: 'zeebe:formDefinition'
          },
          message: 'should be equal to constant',
          emUsed: true
        },
        {
          keyword: 'const',
          dataPath: '/properties/8/binding/property',
          schemaPath: '#/allOf/1/allOf/8/then/properties/properties/contains/properties/binding/properties/property/const',
          params: {
            allowedValue: 'formId'
          },
          message: 'should be equal to constant',
          emUsed: true
        },
        {
          keyword: 'const',
          dataPath: '/properties/9/binding/type',
          schemaPath: '#/allOf/1/allOf/8/then/properties/properties/contains/properties/binding/properties/type/const',
          params: {
            allowedValue: 'zeebe:formDefinition'
          },
          message: 'should be equal to constant',
          emUsed: true
        },
        {
          keyword: 'const',
          dataPath: '/properties/9/binding/property',
          schemaPath: '#/allOf/1/allOf/8/then/properties/properties/contains/properties/binding/properties/property/const',
          params: {
            allowedValue: 'formId'
          },
          message: 'should be equal to constant',
          emUsed: true
        },
        {
          keyword: 'contains',
          dataPath: '/properties',
          schemaPath: '#/allOf/1/allOf/8/then/properties/properties/contains',
          params: {
            minContains: 1
          },
          message: 'should contain at least 1 valid item(s)',
          emUsed: true
        }
      ]
    },
    message: '`property`=`bindingType` is not supported when using `property`=`externalReference`. Use `formId` with `bindingType`'
  },
  {
    keyword: 'if',
    dataPath: '',
    schemaPath: '#/allOf/1/allOf/8/if',
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