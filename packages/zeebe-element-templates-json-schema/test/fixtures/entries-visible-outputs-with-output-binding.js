export const template = {
  'name': 'test',
  'id': 'test',
  'appliesTo': [
    'bpmn:ServiceTask'
  ],
  'entriesVisible': {
    'outputs': true
  },
  'properties': [
    {
      'label': 'Output',
      'type': 'String',
      'value': 'outputValue',
      'binding': {
        'type': 'zeebe:output',
        'source': '= result'
      }
    }
  ]
};

export const errors = [
  {
    keyword: 'errorMessage',
    dataPath: '/properties',
    schemaPath: '#/allOf/1/allOf/12/allOf/1/then/properties/properties/errorMessage',
    params: {
      errors: [
        {
          keyword: 'not',
          dataPath: '/properties',
          schemaPath: '#/allOf/1/allOf/12/allOf/1/then/properties/properties/not',
          params: {},
          message: 'should NOT be valid',
          emUsed: true
        }
      ]
    },
    message: 'Binding with `type`=`zeebe:output` must not be used when `entriesVisible.outputs` is set to `true`'
  },
  {
    keyword: 'if',
    dataPath: '',
    schemaPath: '#/allOf/1/allOf/12/allOf/1/if',
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
