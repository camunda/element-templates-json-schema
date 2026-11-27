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
      'beforeVersion': 2,
      'hints': [
        {
          'from': { 'type': 'zeebe:input', 'name': 'timeout' }
        }
      ]
    }
  ]
};

export const errors = [
  {
    keyword: 'required',
    dataPath: '/updatePaths/0/hints/0',
    schemaPath: '#/required',
    params: {
      missingProperty: 'to'
    },
    message: "should have required property 'to'"
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
