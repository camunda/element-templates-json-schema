export const template = {
  'name': 'InvalidZeebeInputType',
  'id': 'com.camunda.example.InvalidZeebeInputType',
  'appliesTo': [
    'bpmn:Task'
  ],
  'properties': [
    {
      'label': 'foo',
      'type': 'Text',
      'binding': {
        'type': 'zeebe:input',
        'name': 'foo'
      }
    },
    {
      'label': 'bar',
      'type': 'Boolean',
      'binding': {
        'type': 'zeebe:input',
        'name': 'bar'
      }
    },
    {
      'label': 'baz',
      'type': 'Number',
      'binding': {
        'type': 'zeebe:input',
        'name': 'baz'
      }
    },
    {
      'label': 'baz',
      'type': 'Car',
      'binding': {
        'type': 'zeebe:input',
        'name': 'baz'
      }
    }
  ]
};

export const errors = [
  {
    dataPath: '/properties/3/type',
    keyword: 'errorMessage',
    message: 'invalid property type "Car" for binding type "zeebe:input"; must be any of { String, Text, Hidden, Dropdown, Boolean, Number }',
    params: {
      errors: [
        {
          dataPath: '/properties/3/type',
          emUsed: true,
          keyword: 'enum',
          message: 'should be equal to one of the allowed values',
          params: {
            allowedValues: [
              'String',
              'Text',
              'Hidden',
              'Dropdown',
              'Boolean',
              'Number'
            ]
          },
          schemaPath: '#/allOf/1/items/allOf/1/then/properties/type/enum'
        }
      ]
    },
    schemaPath: '#/allOf/1/items/allOf/1/then/properties/type/errorMessage'
  },
  {
    dataPath: '/properties/3',
    keyword: 'if',
    message: 'should match "then" schema',
    params: {
      failingKeyword: 'then'
    },
    schemaPath: '#/allOf/1/items/allOf/1/if'
  },
  {
    dataPath: '',
    keyword: 'type',
    message: 'should be array',
    params: {
      type: 'array'
    },
    schemaPath: '#/oneOf/1/type'
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
