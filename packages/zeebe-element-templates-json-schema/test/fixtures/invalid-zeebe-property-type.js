export const template = {
  'name': 'Invalid Zeebe Property Type',
  'id': 'com.camunda.example.InvalidZeebePropertyType',
  'appliesTo': [
    'bpmn:Task'
  ],
  'properties': [
    {
      'label': 'missing name',
      'type': 'String',
      'value': '1',
      'binding': {
        'type': 'zeebe:property'
      }
    },
    {
      'label': 'truthy (boolean)',
      'type': 'Boolean',
      'value': true,
      'binding': {
        'type': 'zeebe:property',
        'name': 'bool'
      }
    }
  ]
};

export const errors = [
  {
    keyword: 'errorMessage',
    dataPath: '/properties/0/binding',
    schemaPath: '#/definitions/properties/allOf/1/items/properties/binding/allOf/0/then/errorMessage',
    params: { errors: [
      {
        keyword: 'required',
        emUsed: true,
        dataPath: '/properties/0/binding',
        schemaPath: '#/definitions/properties/allOf/1/items/properties/binding/allOf/0/then/required',
        params: {
          missingProperty: 'name'
        },
        message: "should have required property 'name'"
      }
    ] },
    message: 'property.binding "zeebe:property" requires name'
  },
  {
    keyword: 'if',
    dataPath: '/properties/0/binding',
    schemaPath: '#/definitions/properties/allOf/1/items/properties/binding/allOf/0/if',
    params: { failingKeyword: 'then' },
    message: 'should match "then" schema'
  },
  {
    keyword: 'errorMessage',
    dataPath: '/properties/1/type',
    schemaPath: '#/definitions/properties/allOf/1/items/allOf/1/then/properties/type/errorMessage',
    params: { errors: [
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
    ] },
    message: 'invalid property type "Boolean" for binding type "zeebe:property"; must be any of { String, Text, Hidden, Dropdown }'
  },
  {
    keyword: 'if',
    dataPath: '/properties/1',
    schemaPath: '#/definitions/properties/allOf/1/items/allOf/1/if',
    params: { failingKeyword: 'then' },
    message: 'should match "then" schema'
  },
  {
    keyword: 'type',
    dataPath: '',
    schemaPath: '#/oneOf/1/type',
    params: { type: 'array' },
    message: 'should be array'
  },
  {
    keyword: 'oneOf',
    dataPath: '',
    schemaPath: '#/oneOf',
    params: { passingSchemas: null },
    message: 'should match exactly one schema in oneOf'
  }
];