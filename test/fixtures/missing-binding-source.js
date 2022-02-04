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
          emUsed: true,
          dataPath: '/properties/1/binding',
          schemaPath: '#/definitions/properties/allOf/1/items/properties/binding/allOf/1/then/required',
          params: {
            missingProperty: 'source'
          },
          message: "should have required property 'source'"
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
