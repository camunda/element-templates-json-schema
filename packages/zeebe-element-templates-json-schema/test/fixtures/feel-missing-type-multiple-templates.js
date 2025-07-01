export const template = [
  {
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
  }
];

export const errors = [
  {
    keyword: 'type',
    dataPath: '',
    schemaPath: '#/type',
    params: {
      type: 'object'
    },
    message: 'should be object'
  },
  {
    keyword: 'required',
    dataPath: '/0/properties/0',
    schemaPath: '#/allOf/1/items/allOf/4/then/required',
    params: {
      missingProperty: 'type'
    },
    message: "should have required property 'type'"
  },
  {
    keyword: 'if',
    dataPath: '/0/properties/0',
    schemaPath: '#/allOf/1/items/allOf/4/if',
    params: {
      failingKeyword: 'then'
    },
    message: 'should match "then" schema'
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