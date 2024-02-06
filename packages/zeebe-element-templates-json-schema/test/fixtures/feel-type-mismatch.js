export const template = {
  name: 'Pattern Template',
  id: 'com.example.PatternTemplate',
  appliesTo: [
    'bpmn:Task'
  ],
  properties: [
    {
      label: 'Text (static)',
      type: 'Text',
      binding: {
        type: 'property',
        name: 'prop'
      },
      feel: 'static'
    }
  ]
};

export const errors =
[
  {
    dataPath: '/properties/0/feel',
    keyword: 'enum',
    message: 'should be equal to one of the allowed values',
    params: {
      allowedValues: [
        'optional',
        'required'
      ]
    },
    schemaPath: '#/allOf/1/items/allOf/8/then/properties/feel/enum'
  },
  {
    dataPath: '/properties/0',
    keyword: 'if',
    message: 'should match "then" schema',
    params: {
      failingKeyword: 'then',
    },
    schemaPath: '#/allOf/1/items/allOf/8/if'
  },
  {
    dataPath: '',
    keyword: 'type',
    message: 'should be array',
    params: {
      type: 'array'
    },
    schemaPath: '#/oneOf/1/type'
  },
  {
    dataPath: '',
    keyword: 'oneOf',
    message: 'should match exactly one schema in oneOf',
    params: {
      passingSchemas: null
    },
    schemaPath: '#/oneOf'
  }
];