export const template = {
  'name': 'Documentation Ref',
  'id': 'com.camunda.example.DocumentationRef',
  'appliesTo': [
    'bpmn:Task'
  ],
  'properties': [],
  'documentationRef': 'foo'
};

export const errors = [
  {
    keyword: 'errorMessage',
    dataPath: '/documentationRef',
    schemaPath: '#/allOf/0/properties/documentationRef/errorMessage',
    params: {
      errors: [
        {
          keyword: 'pattern',
          dataPath: '/documentationRef',
          schemaPath: '#/allOf/0/properties/documentationRef/pattern',
          params: { pattern: '^(https|http)://.*' },
          message: 'should match pattern "^(https|http)://.*"',
          emUsed: true
        }
      ]
    },
    message: 'Malformed documentation URL, must match "^(https|http)://.*"'
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