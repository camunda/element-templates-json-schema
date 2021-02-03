export const template = {
  'name': 'MissingBindingVariablesTarget',
  'id': 'com.camunda.example.MissingBindingVariablesTarget',
  'appliesTo': [
    'bpmn:Task'
  ],
  'properties': [
    {
      'label': 'foo',
      'type': 'String',
      'binding': {
        'type': 'camunda:in',
        'target': 'foo'
      }
    },
    {
      'label': 'bar',
      'type': 'String',
      'binding': {
        'type': 'camunda:in'
      }
    }
  ]
};

export const errors = [
  {
    keyword: 'errorMessage',
    dataPath: '/properties/1/binding',
    schemaPath: '#/definitions/properties/items/properties/binding/allOf/2/then/errorMessage',
    params: {
      errors: [
        {
          keyword: 'required',
          dataPath: '/properties/1/binding',
          schemaPath: '#/definitions/properties/items/properties/binding/allOf/2/then/oneOf/0/required',
          params: {
            missingProperty: 'variables'
          },
          message: "should have required property 'variables'"
        },
        {
          keyword: 'required',
          dataPath: '/properties/1/binding',
          schemaPath: '#/definitions/properties/items/properties/binding/allOf/2/then/oneOf/1/required',
          params: {
            missingProperty: 'target'
          },
          message: "should have required property 'target'"
        },
        {
          keyword: 'oneOf',
          dataPath: '/properties/1/binding',
          schemaPath: '#/definitions/properties/items/properties/binding/allOf/2/then/oneOf',
          params: {
            'passingSchemas': null
          },
          message: 'should match exactly one schema in oneOf'
        }
      ]
    },
    message: 'property.binding "camunda:in" requires variables or target'
  },
  {
    keyword: 'if',
    dataPath: '/properties/1/binding',
    schemaPath: '#/definitions/properties/items/properties/binding/allOf/2/if',
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
