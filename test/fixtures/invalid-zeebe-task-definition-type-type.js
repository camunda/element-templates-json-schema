export const template = {
  'name': 'InvalidZeebeTaskHeaderType',
  'id': 'com.camunda.example.InvalidZeebeTaskHeaderType',
  'appliesTo': [
    'bpmn:Task'
  ],
  'properties': [
    {
      'label': 'foo',
      'type': 'Text',
      'binding': {
        'type': 'zeebe:taskDefinition:type'
      }
    },
    {
      'label': 'bar',
      'type': 'Boolean',
      'binding': {
        'type': 'zeebe:taskDefinition:type'
      }
    }
  ]
};

export const errors = [
  {
    keyword: 'errorMessage',
    dataPath: '/properties/1/type',
    schemaPath: '#/definitions/properties/allOf/1/items/allOf/1/then/properties/type/errorMessage',
    params: {
      errors: [
        {
          keyword: 'enum',
          emUsed: true,
          dataPath: '/properties/1/type',
          schemaPath: '#/definitions/properties/allOf/1/items/allOf/1/then/properties/type/enum',
          params: {
            'allowedValues': [
              'String',
              'Text',
              'Hidden',
              'Dropdown'
            ]
          },
          message: 'should be equal to one of the allowed values'
        }
      ]
    },
    message: 'invalid property type "Boolean" for binding type "zeebe:taskDefinition:type"; must be any of { String, Text, Hidden, Dropdown }'
  },
  {
    keyword: 'if',
    dataPath: '/properties/1',
    schemaPath: '#/definitions/properties/allOf/1/items/allOf/1/if',
    params: {
      'failingKeyword': 'then'
    },
    message: 'should match "then" schema'
  },
  {
    dataPath: '',
    keyword: 'type',
    message: 'should be array',
    params: {
      type: 'array',
    },
    schemaPath: '#/oneOf/1/type',
  },
  {
    dataPath: '',
    keyword: 'oneOf',
    message: 'should match exactly one schema in oneOf',
    params: {
      passingSchemas: null
    },
    schemaPath: '#/oneOf'
  }
];
