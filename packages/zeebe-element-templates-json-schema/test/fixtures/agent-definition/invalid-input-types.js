export const template = {
  name: 'Agent Definition',
  id: 'agent-definition-invalid-input-types',
  description: 'zeebe:agentDefinition does not support a FEEL/String escape hatch.',
  version: 1,
  appliesTo: [
    'bpmn:ServiceTask'
  ],
  elementType: {
    value: 'bpmn:ServiceTask'
  },
  properties: [
    {
      label: 'Agent type',
      value: '=aiAgentTask',
      type: 'String',
      feel: 'required',
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
    dataPath: '/properties/0/value',
    schemaPath: '#/allOf/1/allOf/15/allOf/1/then/properties/properties/items/then/properties/value/enum',
    params: {
      allowedValues: [
        'aiAgentTask',
        'external'
      ]
    },
    message: 'should be equal to one of the allowed values'
  },
  {
    keyword: 'if',
    dataPath: '/properties/0',
    schemaPath: '#/allOf/1/allOf/15/allOf/1/then/properties/properties/items/if',
    params: {
      failingKeyword: 'then'
    },
    message: 'should match "then" schema'
  },
  {
    keyword: 'if',
    dataPath: '',
    schemaPath: '#/allOf/1/allOf/15/allOf/1/if',
    params: {
      failingKeyword: 'then'
    },
    message: 'should match "then" schema'
  },
  {
    keyword: 'enum',
    dataPath: '/properties/0/type',
    schemaPath: '#/allOf/1/items/allOf/36/then/properties/type/enum',
    params: {
      allowedValues: [
        'Hidden',
        'Dropdown'
      ]
    },
    message: 'should be equal to one of the allowed values'
  },
  {
    keyword: 'if',
    dataPath: '/properties/0',
    schemaPath: '#/allOf/1/items/allOf/36/if',
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
