export const template = {
  'name': 'Binding Type Template (invalid value)',
  'id': 'com.example.BindingTemplate-invalid-value',
  'appliesTo': [
    'bpmn:Task'
  ],
  'elementType': {
    'value': 'foobar'
  },
  'properties': [],
};

export const errors = [
  {
    keyword: 'errorMessage',
    dataPath: '/elementType/value',
    schemaPath: '#/allOf/0/properties/elementType/properties/value/errorMessage',
    params: {
      errors: [
        {
          keyword: 'pattern',
          dataPath: '/elementType/value',
          schemaPath: '#/allOf/0/properties/elementType/properties/value/pattern',
          params: {
            pattern: '^[\\w\\d]+:[\\w\\d]+$'
          },
          message: 'should match pattern "^[\\w\\d]+:[\\w\\d]+$"',
          emUsed: true
        }
      ]
    },
    message: 'invalid item for "elementType", should contain namespaced property, example: "bpmn:Task"'
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