export const template = {
  'name': 'Invalid preset',
  'id': 'example.com.presetMissingProperties',
  'appliesTo': [
    'bpmn:ServiceTask'
  ],
  'properties': [],
  'presets': [
    {
      'id': 'doIt'
    }
  ]
};

export const errors = [
  {
    keyword: 'required',
    dataPath: '/presets/0',
    schemaPath: '#/properties/presets/items/required',
    params: { missingProperty: 'properties' },
    message: "should have required property 'properties'"
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
