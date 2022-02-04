export const template = {
  'name': 'MissingBindingKey',
  'id': 'com.camunda.example.MissingBindingKey',
  'appliesTo': [
    'bpmn:Task'
  ],
  'properties': [
    {
      'label': 'foo',
      'type': 'String',
      'binding': {
        'type': 'zeebe:taskHeader'
      }
    }
  ]
};

export const errors = [
  {
    keyword: 'errorMessage',
    dataPath: '/properties/0/binding',
    schemaPath: '#/definitions/properties/allOf/1/items/properties/binding/allOf/2/then/errorMessage',
    params: {
      errors: [
        {
          keyword: 'required',
          emUsed: true,
          dataPath: '/properties/0/binding',
          schemaPath: '#/definitions/properties/allOf/1/items/properties/binding/allOf/2/then/required',
          params: {
            missingProperty: 'key'
          },
          message: "should have required property 'key'"
        }
      ]
    },
    message: 'property.binding "zeebe:taskHeader" requires key'
  },
  {
    keyword: 'if',
    dataPath: '/properties/0/binding',
    schemaPath: '#/definitions/properties/allOf/1/items/properties/binding/allOf/2/if',
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
