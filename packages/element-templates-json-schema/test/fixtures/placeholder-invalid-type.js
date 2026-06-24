export const template = {
  name: 'Tooltip',
  id: 'example.com.tooltip',
  appliesTo: [
    'bpmn:ServiceTask'
  ],
  properties: [
    {
      label: 'Input with placeholder',
      type: 'String',
      binding: {
        type: 'property',
        name: 'prop'
      },
      placeholder: [ 'invalid placeholder type' ]
    }
  ]
};

export const errors = [
  {
    keyword: 'type',
    dataPath: '/properties/0/placeholder',
    schemaPath: '#/definitions/properties/allOf/0/items/allOf/2/then/properties/placeholder/type',
    params: {
      type: 'string'
    },
    message: 'should be string'
  },
  {
    keyword: 'if',
    dataPath: '/properties/0',
    schemaPath: '#/definitions/properties/allOf/0/items/allOf/2/if',
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