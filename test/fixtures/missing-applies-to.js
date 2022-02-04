export const template = {
  'name': 'Invalid',
  'id': 'foo',
  'properties': []
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
          params: { missingProperty: 'appliesTo' },
          message: "should have required property 'appliesTo'",
          emUsed: true
        }
      ]
    },
    message: 'missing appliesTo=[]'
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
