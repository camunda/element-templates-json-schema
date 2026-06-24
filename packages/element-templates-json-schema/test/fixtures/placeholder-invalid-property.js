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
      type: 'Hidden',
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
    keyword: 'not',
    dataPath: '/properties/0',
    schemaPath: '#/definitions/properties/allOf/0/items/allOf/2/else/not',
    params: {},
    message: 'should NOT be valid'
  },
  {
    keyword: 'if',
    dataPath: '/properties/0',
    schemaPath: '#/definitions/properties/allOf/0/items/allOf/2/if',
    params: {
      failingKeyword: 'else'
    },
    message: 'should match "else" schema'
  },
  {
    keyword: 'not',
    dataPath: '/properties/1',
    schemaPath: '#/definitions/properties/allOf/0/items/allOf/2/else/not',
    params: {},
    message: 'should NOT be valid'
  },
  {
    keyword: 'if',
    dataPath: '/properties/1',
    schemaPath: '#/definitions/properties/allOf/0/items/allOf/2/if',
    params: {
      failingKeyword: 'else'
    },
    message: 'should match "else" schema'
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