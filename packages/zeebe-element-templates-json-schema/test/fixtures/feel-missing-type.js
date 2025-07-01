export const template = {
  name: 'Pattern Template',
  id: 'com.example.PatternTemplate',
  appliesTo: [
    'bpmn:Task'
  ],
  properties: [
    {
      label: 'Text (static)',
      binding: {
        type: 'property',
        name: 'prop'
      },
      feel: 'required'
    }
  ]
};

export const errors = [
  {
    keyword: 'required',
    dataPath: '/properties/0',
    schemaPath: '#/allOf/1/items/allOf/4/then/required',
    params: {
      missingProperty: 'type'
    },
    message: "should have required property 'type'"
  },
  {
    keyword: 'if',
    dataPath: '/properties/0',
    schemaPath: '#/allOf/1/items/allOf/4/if',
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