export const template = {
  name: 'Pattern Template',
  id: 'com.example.PatternTemplate',
  appliesTo: [
    'bpmn:Task'
  ],
  properties: [
    {
      type: 'Text',
      binding: {
        type: 'zeebe:property',
        name: 'prop'
      },
      feel: 'required',
      value: 'valid'
    },
    {
      type: 'Boolean',
      binding: {
        type: 'zeebe:property',
        name: 'prop'
      },
      feel: 'required',
      value: true
    },
    {
      type: 'Number',
      binding: {
        type: 'zeebe:property',
        name: 'prop'
      },
      feel: 'required',
      value: 123
    },
  ]
};

export const errors = [
  {
    keyword: 'type',
    dataPath: '/properties/1/value',
    schemaPath: '#/allOf/1/items/allOf/9/then/properties/value/type',
    params: { type: 'string' },
    message: 'should be string'
  },
  {
    keyword: 'if',
    dataPath: '/properties/1',
    schemaPath: '#/allOf/1/items/allOf/9/if',
    params: { failingKeyword: 'then' },
    message: 'should match "then" schema'
  },
  {
    keyword: 'type',
    dataPath: '/properties/2/value',
    schemaPath: '#/allOf/1/items/allOf/9/then/properties/value/type',
    params: { type: 'string' },
    message: 'should be string'
  },
  {
    keyword: 'if',
    dataPath: '/properties/2',
    schemaPath: '#/allOf/1/items/allOf/9/if',
    params: { failingKeyword: 'then' },
    message: 'should match "then" schema'
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