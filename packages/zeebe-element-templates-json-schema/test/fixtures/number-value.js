export const template = {
  'name': 'NumberAsValue',
  'id': 'com.camunda.example.NumberAsValue',
  'appliesTo': [
    'bpmn:Task'
  ],
  'properties': [
    {
      'label': 'Are you awesome?',
      'type': 'String',
      'value': 50,
      'binding': {
        'type': 'property',
        'name': 'name'
      }
    },
    {
      'label': 'Am I awesome?',
      'type': 'Number',
      'value': 50,
      'binding': {
        'type': 'zeebe:property',
        'name': 'customProp'
      }
    }
  ]
};

export const errors = [
  {
    keyword: 'type',
    dataPath: '/properties/0/value',
    schemaPath: '#/allOf/0/items/allOf/2/then/properties/value/type',
    params: {
      type: [
        'string',
        'boolean'
      ]
    },
    message: 'should be string,boolean'
  },
  {
    dataPath: '/properties/0',
    keyword: 'if',
    message: 'should match "then" schema',
    params: {
      failingKeyword: 'then'
    },
    schemaPath: '#/allOf/0/items/allOf/2/if'
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
