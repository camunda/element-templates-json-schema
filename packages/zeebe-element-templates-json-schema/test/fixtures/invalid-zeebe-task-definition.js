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
        'type': 'zeebe:taskDefinition'
      }
    },
    {
      'label': 'bar',
      'type': 'Boolean',
      'binding': {
        'type': 'zeebe:taskDefinition'
      }
    }
  ]
};

export const errors = [
  {
    'dataPath': '/properties/0/binding',
    'keyword': 'required',
    'message': "should have required property 'property'",
    'params': {
      'missingProperty': 'property'
    },
    'schemaPath': '#/allOf/1/items/properties/binding/allOf/3/then/required'
  },
  {
    'dataPath': '/properties/0/binding',
    'keyword': 'if',
    'message': 'should match "then" schema',
    'params': {
      'failingKeyword': 'then'
    },
    'schemaPath': '#/allOf/1/items/properties/binding/allOf/3/if'
  },
  {
    keyword: 'errorMessage',
    dataPath: '/properties/1/type',
    schemaPath: '#/allOf/1/items/allOf/1/then/properties/type/errorMessage',
    params: {
      errors: [
        {
          keyword: 'enum',
          emUsed: true,
          dataPath: '/properties/1/type',
          schemaPath: '#/allOf/1/items/allOf/1/then/properties/type/enum',
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
    message: 'invalid property type "Boolean" for binding type "zeebe:taskDefinition"; must be any of { String, Text, Hidden, Dropdown }'
  },
  {
    keyword: 'if',
    dataPath: '/properties/1',
    schemaPath: '#/allOf/1/items/allOf/1/if',
    params: {
      'failingKeyword': 'then'
    },
    message: 'should match "then" schema'
  },
  {
    'dataPath': '/properties/1/binding',
    'keyword': 'required',
    'message': "should have required property 'property'",
    'params': {
      'missingProperty': 'property'
    },
    'schemaPath': '#/allOf/1/items/properties/binding/allOf/3/then/required'
  },
  {
    'dataPath': '/properties/1/binding',
    'keyword': 'if',
    'message': 'should match "then" schema',
    'params': {
      'failingKeyword': 'then'
    },
    'schemaPath': '#/allOf/1/items/properties/binding/allOf/3/if'
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
