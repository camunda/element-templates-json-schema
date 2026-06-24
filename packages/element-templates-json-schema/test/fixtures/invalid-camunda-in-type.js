export const template = {
  'name': 'InvalidCamundaInType',
  'id': 'com.camunda.example.InvalidCamundaInType',
  'appliesTo': [
    'bpmn:Task'
  ],
  'properties': [
    {
      'label': 'foo',
      'type': 'Text',
      'binding': {
        'type': 'camunda:in',
        'variables': 'all'
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
          dataPath: '/properties/0/type',
          schemaPath: '#/definitions/properties/allOf/1/items/allOf/2/then/properties/type/enum',
          params: {
            allowedValues: [
              'String',
              'Hidden',
              'Dropdown'
            ]
          },
          message: 'should be equal to one of the allowed values',
          emUsed: true
        }
      ]
    },
    message: 'invalid property type "Text" for binding type "camunda:in"; must be any of { String, Hidden, Dropdown }'
  },
  {
    keyword: 'if',
    dataPath: '/properties/0',
    schemaPath: '#/definitions/properties/allOf/1/items/allOf/2/if',
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
