export const template = {
  'name': 'Invalid step',
  'id': 'example.com.stepBothChildrenAndPresetId',
  'appliesTo': [
    'bpmn:ServiceTask'
  ],
  'properties': [],
  'steps': [
    {
      'name': 'Bad step',
      'presetId': 'doIt',
      'steps': [
        {
          'name': 'Nested',
          'presetId': 'nested'
        }
      ]
    }
  ],
  'presets': [
    {
      'id': 'doIt',
      'properties': {}
    },
    {
      'id': 'nested',
      'properties': {}
    }
  ]
};

export const errors = [
  {
    keyword: 'not',
    dataPath: '/steps/0',
    schemaPath: '#/oneOf/0/not',
    params: {},
    message: 'should NOT be valid'
  },
  {
    keyword: 'not',
    dataPath: '/steps/0',
    schemaPath: '#/oneOf/1/not',
    params: {},
    message: 'should NOT be valid'
  },
  {
    keyword: 'oneOf',
    dataPath: '/steps/0',
    schemaPath: '#/oneOf',
    params: { passingSchemas: null },
    message: 'should match exactly one schema in oneOf'
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
