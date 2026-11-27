export const template = {
  'name': 'REST',
  'id': 'example.rest.v2',
  'version': 3,
  'appliesTo': [
    'bpmn:ServiceTask'
  ],
  'properties': [
    {
      'label': 'Endpoint',
      'type': 'String',
      'binding': {
        'type': 'zeebe:input',
        'name': 'endpoint'
      }
    }
  ],
  'updatePaths': [
    {
      'changes': '- Timeout is now called request timeout.'
    }
  ]
};

export const errors = [
  {
    keyword: 'errorMessage',
    dataPath: '/updatePaths/0',
    schemaPath: '#/properties/updatePaths/items/else/errorMessage',
    params: {
      errors: [
        {
          keyword: 'required',
          dataPath: '/updatePaths/0',
          schemaPath: '#/properties/updatePaths/items/else/required',
          params: {
            missingProperty: 'beforeVersion'
          },
          message: "should have required property 'beforeVersion'",
          emUsed: true
        }
      ]
    },
    message: 'missing beforeVersion or templateId for update path'
  },
  {
    keyword: 'if',
    dataPath: '/updatePaths/0',
    schemaPath: '#/properties/updatePaths/items/if',
    params: {
      failingKeyword: 'else'
    },
    message: 'should match "else" schema'
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
