export const template = {
  name: 'Agent Definition',
  id: 'agent-definition-wrong-element-type',
  description: 'zeebe:agentDefinition is not allowed on bpmn:UserTask.',
  version: 1,
  appliesTo: [
    'bpmn:Task'
  ],
  elementType: {
    value: 'bpmn:UserTask'
  },
  properties: [
    {
      value: 'aiAgentTask',
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
    keyword: 'enum',
    dataPath: '/elementType/value',
    schemaPath: '#/allOf/1/allOf/15/allOf/0/then/anyOf/0/properties/elementType/properties/value/enum',
    params: {
      allowedValues: [
        'bpmn:ServiceTask',
        'bpmn:AdHocSubProcess'
      ]
    },
    message: 'should be equal to one of the allowed values'
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
