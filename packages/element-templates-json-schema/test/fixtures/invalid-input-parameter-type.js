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
          dataPath: '/properties/0/type',
          schemaPath: '#/definitions/properties/allOf/1/items/allOf/3/then/properties/type/enum',
          params: {
            allowedValues: [
              'String',
              'Text',
              'Hidden',
              'Dropdown'
            ]
          },
          message: 'should be equal to one of the allowed values',
          emUsed: true
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
