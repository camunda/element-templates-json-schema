export const template = {
  'name': 'InvalidZeebeOutputType',
  'id': 'com.camunda.example.InvalidZeebeOutputType',
  'appliesTo': [
    'bpmn:Task'
  ],
  'properties': [
    {
      'label': 'foo',
      'type': 'Text',
      'binding': {
        'type': 'zeebe:output',
        'source': 'foo'
      }
    },
    {
      'label': 'bar',
      'type': 'Toggle',
      'binding': {
        'type': 'zeebe:output',
        'source': 'bar'
      }
    },
    {
      'label': 'bar',
      'type': 'Boolean',
      'feel': 'static',
      'binding': {
        'type': 'zeebe:output',
        'source': 'bar'
      }
    }
  ]
};

export const errors = [
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
              'Dropdown',
              'Boolean',
              'Number'
            ]
          },
          message: 'should be equal to one of the allowed values'
        }
      ]
    },
    message: 'invalid property type "Toggle" for binding type "zeebe:output"; must be any of { String, Text, Hidden, Dropdown, Boolean, Number }'
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
