export const template = {
  'name': 'MissingBindingName',
  'id': 'com.camunda.example.MissingBindingName',
  'appliesTo': [
    'bpmn:Task'
  ],
  'properties': [
    {
      'label': 'foo',
      'type': 'String',
      'binding': {
        'name': 'bar',
        'type': 'camunda:inputParameter'
      }
    },
    {
      'label': 'bar',
      'type': 'String',
      'binding': {
        'type': 'property'
      }
    }
  ]
};

export const errors = [
  {
    keyword: 'errorMessage',
    dataPath: '/properties/1/binding',
    schemaPath: '#/definitions/properties/allOf/1/items/properties/binding/allOf/0/then/errorMessage',
    params: {
      errors: [
        {
          keyword: 'required',
          emUsed: true,
          dataPath: '/properties/1/binding',
          schemaPath: '#/definitions/properties/allOf/1/items/properties/binding/allOf/0/then/required',
          params: {
            missingProperty: 'name'
          },
          message: "should have required property 'name'"
        }
      ]
    },
    message: 'property.binding "property" requires name'
  },
  {
    keyword: 'if',
    dataPath: '/properties/1/binding',
    schemaPath: '#/definitions/properties/allOf/1/items/properties/binding/allOf/0/if',
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
