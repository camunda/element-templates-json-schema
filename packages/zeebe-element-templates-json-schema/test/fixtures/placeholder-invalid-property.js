export const template = {
  name: 'Tooltip',
  id: 'example.com.tooltip',
  appliesTo: [
    'bpmn:ServiceTask'
  ],
  properties: [
    {
      label: 'Input with placeholder',
      type: 'Boolean',
      binding: {
        type: 'property',
        name: 'prop'
      },
      placeholder: 'Invalid input type'
    },
    {
      label: 'Input with placeholder',
      type: 'Number',
      binding: {
        type: 'property',
        name: 'prop'
      },
      placeholder: 'Invalid input type'
    }
  ]
};

export const errors = [
  {
    'dataPath': '/properties/0',
    'keyword': 'not',
    'message': 'should NOT be valid',
    'params': {},
    'schemaPath': '#/allOf/0/items/allOf/3/else/not',
  },
  {
    'dataPath': '/properties/0',
    'keyword': 'if',
    'message': 'should match "else" schema',
    params: { failingKeyword: 'else' },
    schemaPath: '#/allOf/0/items/allOf/3/if'
  },
  {
    'dataPath': '/properties/1',
    'keyword': 'not',
    'message': 'should NOT be valid',
    'params': {},
    'schemaPath': '#/allOf/0/items/allOf/3/else/not',
  },
  {
    'dataPath': '/properties/1',
    'keyword': 'if',
    'message': 'should match "else" schema',
    params: { failingKeyword: 'else' },
    schemaPath: '#/allOf/0/items/allOf/3/if'
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