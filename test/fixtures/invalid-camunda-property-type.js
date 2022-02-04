export const template = {
  'name': 'InvalidCamundaPropertyType',
  'id': 'com.camunda.example.InvalidCamundaPropertyType',
  'appliesTo': [
    'bpmn:Task'
  ],
  'properties': [
    {
      'label': 'foo',
      'type': 'Text',
      'binding': {
        'type': 'camunda:property',
        'name': 'foo'
      }
    },
    {
      'label': 'empty',
      'binding': {
        'type': 'camunda:property',
        'name': 'empty'
      },
    },
    {
      'label': 'bar',
      'type': 'String',
      'binding': {
        'type': 'camunda:property',
        'name': 'bar'
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
    message: 'invalid property type "Text" for binding type "camunda:property"; must be any of { String, Hidden, Dropdown }'
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
