export const template = {
  name: 'Agent Definition',
  id: 'agent-definition-invalid-both-element-types',
  description: 'bpmn:ServiceTask and bpmn:AdHocSubProcess are mutually exclusive for zeebe:agentDefinition.',
  version: 1,
  appliesTo: [
    'bpmn:ServiceTask',
    'bpmn:AdHocSubProcess'
  ],
  properties: [
    {
      value: 'external',
      type: 'Hidden',
      binding: {
        type: 'zeebe:agentDefinition',
        property: 'agentType'
      }
    }
  ]
};

export const errors = [
  {
    keyword: 'required',
    dataPath: '',
    schemaPath: '#/allOf/1/allOf/15/allOf/0/then/anyOf/0/required',
    params: {
      missingProperty: 'elementType'
    },
    message: 'should have required property \'elementType\''
  },
  {
    keyword: 'const',
    dataPath: '/appliesTo',
    schemaPath: '#/allOf/1/allOf/15/allOf/0/then/anyOf/1/properties/appliesTo/anyOf/0/const',
    params: {
      allowedValue: [
        'bpmn:ServiceTask'
      ]
    },
    message: 'should be equal to constant'
  },
  {
    keyword: 'const',
    dataPath: '/appliesTo',
    schemaPath: '#/allOf/1/allOf/15/allOf/0/then/anyOf/1/properties/appliesTo/anyOf/1/const',
    params: {
      allowedValue: [
        'bpmn:AdHocSubProcess'
      ]
    },
    message: 'should be equal to constant'
  },
  {
    keyword: 'anyOf',
    dataPath: '/appliesTo',
    schemaPath: '#/allOf/1/allOf/15/allOf/0/then/anyOf/1/properties/appliesTo/anyOf',
    params: {},
    message: 'should match some schema in anyOf'
  },
  {
    keyword: 'anyOf',
    dataPath: '',
    schemaPath: '#/allOf/1/allOf/15/allOf/0/then/anyOf',
    params: {},
    message: 'should match some schema in anyOf'
  },
  {
    keyword: 'if',
    dataPath: '',
    schemaPath: '#/allOf/1/allOf/15/allOf/0/if',
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
