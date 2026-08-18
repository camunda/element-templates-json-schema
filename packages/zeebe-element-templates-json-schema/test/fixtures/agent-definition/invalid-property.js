export const template = {
  name: 'Agent Definition',
  id: 'agent-definition-invalid-property',
  description: 'zeebe:agentDefinition only supports the agentType property.',
  version: 1,
  appliesTo: [
    'bpmn:ServiceTask'
  ],
  elementType: {
    value: 'bpmn:ServiceTask'
  },
  properties: [
    {
      value: 'aiAgentTask',
      type: 'Hidden',
      binding: {
        type: 'zeebe:agentDefinition',
        property: 'foo'
      }
    }
  ]
};

export const errors = [
  {
    keyword: 'const',
    dataPath: '/properties/0/binding/property',
    schemaPath: '#/allOf/1/items/properties/binding/allOf/19/then/properties/property/const',
    params: {
      allowedValue: 'agentType'
    },
    message: 'should be equal to constant'
  },
  {
    keyword: 'if',
    dataPath: '/properties/0/binding',
    schemaPath: '#/allOf/1/items/properties/binding/allOf/19/if',
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
