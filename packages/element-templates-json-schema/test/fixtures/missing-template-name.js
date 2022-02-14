export const template = {
  'id': 'foo',
  'properties': [],
  'appliesTo': []
};

export const errors = [
  {
    keyword: 'errorMessage',
    dataPath: '',
    schemaPath: '#/allOf/0/errorMessage',
    params: {
      errors: [
        {
          keyword: 'required',
          dataPath: '',
          schemaPath: '#/allOf/0/required',
          params: { missingProperty: 'name' },
          message: "should have required property 'name'",
          emUsed: true
        }
      ]
    },
    message: 'missing template name'
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
