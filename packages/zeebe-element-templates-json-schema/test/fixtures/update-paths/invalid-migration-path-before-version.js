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
      'templateId': 'example.rest',
      'beforeVersion': 2
    }
  ]
};

export const errors = [
  {
    keyword: 'errorMessage',
    dataPath: '/updatePaths/0',
    schemaPath: '#/properties/updatePaths/items/then/errorMessage',
    params: {
      errors: [
        {
          keyword: 'not',
          dataPath: '/updatePaths/0',
          schemaPath: '#/properties/updatePaths/items/then/not',
          params: {},
          message: 'should NOT be valid',
          emUsed: true
        }
      ]
    },
    message: 'beforeVersion is not allowed on migration paths'
  },
  {
    keyword: 'if',
    dataPath: '/updatePaths/0',
    schemaPath: '#/properties/updatePaths/items/if',
    params: {
      failingKeyword: 'then'
    },
    message: 'should match "then" schema'
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
