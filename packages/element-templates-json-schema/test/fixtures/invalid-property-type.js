export const template = {
  'name': 'InvalidPropertyType',
  'id': 'com.camunda.example.InvalidPropertyType',
  'appliesTo': [
    'bpmn:Task'
  ],
  'properties': [
    {
      'label': 'foo',
      'type': 'Text',
      'binding': {
        'type': 'property',
        'name': 'foo'
      }
    },
    {
      'label': 'bar',
      'type': 'Foo',
      'binding': {
        'type': 'property',
        'name': 'bar'
      }
    }
  ]
};

export const errors = [
  {
    keyword: 'errorMessage',
    dataPath: '/properties/1/type',
    schemaPath: '#/definitions/properties/allOf/1/items/allOf/0/then/properties/type/errorMessage',
    params: {
      errors: [
        {
          keyword: 'enum',
          dataPath: '/properties/1/type',
          schemaPath: '#/definitions/properties/allOf/1/items/allOf/0/then/properties/type/enum',
          params: {
            allowedValues: [
              'String',
              'Text',
              'Hidden',
              'Dropdown',
              'Boolean'
            ]
          },
          message: 'should be equal to one of the allowed values',
          emUsed: true
        }
      ]
    },
    message: 'invalid property type "Foo" for binding type "property"; must be any of { String, Text, Hidden, Dropdown, Boolean }'
  },
  {
    keyword: 'if',
    dataPath: '/properties/1',
    schemaPath: '#/definitions/properties/allOf/1/items/allOf/0/if',
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
