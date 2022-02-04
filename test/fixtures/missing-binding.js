export const template = {
  'name': 'MissingBinding',
  'id': 'com.camunda.example.MissingBinding',
  'appliesTo': [
    'bpmn:Task'
  ],
  'properties': [
    {
      'label': 'Are you awesome?',
      'type': 'String',
      'value': true
    }
  ]
};

export const errors = [
  {
    keyword: 'errorMessage',
    dataPath: '/properties/0',
    schemaPath: '#/definitions/properties/allOf/1/items/errorMessage',
    params: {
      errors: [
        {
          keyword: 'required',
          dataPath: '/properties/0',
          schemaPath: '#/definitions/properties/allOf/1/items/required',
          params: { missingProperty: 'binding' },
          message: "should have required property 'binding'",
          emUsed: true
        }
      ]
    },
    message: 'missing binding for property "0"'
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
