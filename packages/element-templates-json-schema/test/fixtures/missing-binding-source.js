export const template = {
  'name': 'MissingBindingSource',
  'id': 'com.camunda.example.MissingBindingSource',
  'appliesTo': [
    'bpmn:Task'
  ],
  'properties': [
    {
      'label': 'foo',
      'type': 'String',
      'binding': {
        'type': 'camunda:outputParameter',
        'source': 'foo'
      }
    },
    {
      'label': 'foo',
      'type': 'String',
      'binding': {
        'type': 'camunda:outputParameter'
      }
    }
  ]
};

export const errors = [
  {
    keyword: 'errorMessage',
    dataPath: '/properties/1/binding',
    schemaPath: '#/definitions/properties/allOf/1/items/properties/binding/allOf/1/then/errorMessage',
    params: {
      errors: [
        {
          keyword: 'required',
          dataPath: '/properties/1/binding',
          schemaPath: '#/definitions/properties/allOf/1/items/properties/binding/allOf/1/then/required',
          params: {
            missingProperty: 'source'
          },
          message: 'should have required property \'source\'',
          emUsed: true
        }
      ]
    },
    message: 'property.binding "camunda:outputParameter" requires source'
  },
  {
    keyword: 'if',
    dataPath: '/properties/1/binding',
    schemaPath: '#/definitions/properties/allOf/1/items/properties/binding/allOf/1/if',
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
