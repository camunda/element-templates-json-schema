export const template = {
  'name': 'InvalidCamundaOutType',
  'id': 'com.camunda.example.InvalidCamundaOutType',
  'appliesTo': [
    'bpmn:Task'
  ],
  'properties': [
    {
      'label': 'foo',
      'type': 'Text',
      'binding': {
        'type': 'camunda:out',
        'sourceExpression': 'foo'
      }
    }
  ]
};

export const errors = [
  {
    keyword: 'errorMessage',
    dataPath: '/properties/0/type',
    schemaPath: '#/definitions/properties/allOf/1/items/allOf/2/then/properties/type/errorMessage',
    params: {
      errors: [
        {
          keyword: 'enum',
          emUsed: true,
          dataPath: '/properties/0/type',
          schemaPath: '#/definitions/properties/allOf/1/items/allOf/2/then/properties/type/enum',
          params: {
            'allowedValues': [
              'String',
              'Hidden',
              'Dropdown'
            ]
          },
          message: 'should be equal to one of the allowed values'
        }
      ]
    },
    message: 'invalid property type "Text" for binding type "camunda:out"; must be any of { String, Hidden, Dropdown }'
  },
  {
    keyword: 'if',
    dataPath: '/properties/0',
    schemaPath: '#/definitions/properties/allOf/1/items/allOf/2/if',
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
