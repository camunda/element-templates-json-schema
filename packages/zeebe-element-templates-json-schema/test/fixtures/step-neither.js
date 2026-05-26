export const template = {
  'name': 'Invalid step',
  'id': 'example.com.stepNeither',
  'appliesTo': [
    'bpmn:ServiceTask'
  ],
  'properties': [],
  'steps': [
    {
      'name': 'Empty step'
    }
  ]
};

export const errors = [
  {
    keyword: 'required',
    dataPath: '/steps/0',
    schemaPath: '#/oneOf/0/required',
    params: { missingProperty: 'steps' },
    message: "should have required property 'steps'"
  },
  {
    keyword: 'required',
    dataPath: '/steps/0',
    schemaPath: '#/oneOf/1/required',
    params: { missingProperty: 'presetId' },
    message: "should have required property 'presetId'"
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
