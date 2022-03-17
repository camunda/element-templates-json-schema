export const template = {
  name: 'Icon',
  id: 'example.com.icon',
  appliesTo: [
    'bpmn:ServiceTask'
  ],
  properties: [],
  icon: {}
};

export const errors = [
  {
    keyword: 'errorMessage',
    dataPath: '/icon',
    schemaPath: '#/properties/icon/errorMessage',
    params: {
      errors: [
        {
          keyword: 'required',
          dataPath: '/icon',
          schemaPath: '#/properties/icon/required',
          params: { missingProperty: 'contents' },
          message: "should have required property 'contents'",
          emUsed: true
        }
      ]
    },
    message: 'missing icon contents'
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