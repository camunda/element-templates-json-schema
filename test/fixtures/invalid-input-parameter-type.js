export const template = {
  'name': 'InvalidInputParameterType',
  'id': 'com.camunda.example.InvalidInputParameterType',
  'appliesTo': [
    'bpmn:Task'
  ],
  'properties': [
    {
      'label': 'foo',
      'type': 'Boolean',
      'binding': {
        'type': 'camunda:inputParameter',
        'name': 'foo'
      }
    }
  ]
};

export const errors = [
  {
    keyword: 'errorMessage',
    dataPath: '/properties/0/type',
    schemaPath: '#/definitions/properties/allOf/1/items/allOf/3/then/properties/type/errorMessage',
    params: {
      errors: [
        {
          keyword: 'enum',
          emUsed: true,
          dataPath: '/properties/0/type',
          schemaPath: '#/definitions/properties/allOf/1/items/allOf/3/then/properties/type/enum',
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
    message: 'invalid property type "Boolean" for binding type "camunda:inputParameter"; must be any of { String, Text, Hidden, Dropdown }'
  },
  {
    keyword: 'if',
    dataPath: '/properties/0',
    schemaPath: '#/definitions/properties/allOf/1/items/allOf/3/if',
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
