export const template = {
  name: 'Icon (malformed data URL)',
  id: 'example.com.malformed-data-uri',
  appliesTo: [
    'bpmn:ServiceTask'
  ],
  properties: [],
  icon: {
    'contents': 'foo'
  }
};

export const errors = [
  {
    keyword: 'errorMessage',
    dataPath: '/icon/contents',
    schemaPath: '#/properties/icon/properties/contents/errorMessage',
    params: {
      errors: [
        {
          keyword: 'pattern',
          dataPath: '/icon/contents',
          schemaPath: '#/properties/icon/properties/contents/pattern',
          params: { pattern: '^(https?|data):.*' },
          message: 'should match pattern "^(https?|data):.*"',
          emUsed: true
        }
      ]
    },
    message: 'Malformed icon source, must be a valid HTTP(s) or data URL'
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