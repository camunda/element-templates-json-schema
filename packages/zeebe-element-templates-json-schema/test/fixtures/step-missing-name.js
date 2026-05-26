export const template = {
  'name': 'Invalid step',
  'id': 'example.com.stepMissingName',
  'appliesTo': [
    'bpmn:ServiceTask'
  ],
  'properties': [],
  'steps': [
    {
      'presetId': 'doIt'
    }
  ],
  'presets': [
    {
      'id': 'doIt',
      'properties': {}
    }
  ]
};

export const errors = [
  {
    keyword: 'required',
    dataPath: '/steps/0',
    schemaPath: '#/required',
    params: { missingProperty: 'name' },
    message: "should have required property 'name'"
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
