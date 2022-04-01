export const template = {
  'name': 'Binding Type Template (no value)',
  'id': 'com.example.BindingTemplate-no-value',
  'appliesTo': [
    'bpmn:Task'
  ],
  'elementType': { },
  'properties': [],
};

export const errors = [
  {
    keyword: 'errorMessage',
    dataPath: '/elementType',
    schemaPath: '#/allOf/0/properties/elementType/errorMessage',
    params: {
      errors: [
        {
          keyword: 'required',
          dataPath: '/elementType',
          schemaPath: '#/allOf/0/properties/elementType/required',
          params: { missingProperty: 'value' },
          message: "should have required property 'value'",
          emUsed: true
        }
      ]
    },
    message: 'missing elementType value'
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