export const template = {
  'name': 'Condition',
  'id': 'example.com.condition',
  'appliesTo': [
    'bpmn:ServiceTask'
  ],
  'properties': [
    {
      'id': 'myId',
      'label': 'input 1',
      'type': 'String',
      'binding': {
        'type': 'property',
        'name': 'input1'
      }
    },
    {
      'label': 'equals array',
      'type': 'String',
      'condition': {
        'type': 'simple',
        'property': 'myId',
        equals: [ 'text', 'text2' ]
      },
      'binding': {
        'type': 'property',
        'name': 'input2'
      }
    },
    {
      'label': 'array of booleans',
      'type': 'String',
      'condition': {
        'type': 'simple',
        'property': 'myId',
        oneOf: [ true, false ]
      },
      'binding': {
        'type': 'property',
        'name': 'input2'
      }
    }
  ]
};

export const errors = [
  {
    keyword: 'type',
    dataPath: '/properties/1/condition/equals',
    schemaPath: '#/definitions/properties/allOf/0/items/properties/condition/oneOf/0/properties/equals/type',
    params: { type: [ 'string', 'number', 'boolean' ] },
    message: 'should be string,number,boolean'
  },
  {
    keyword: 'required',
    dataPath: '/properties/1/condition',
    schemaPath: '#/definitions/properties/allOf/0/items/properties/condition/oneOf/1/required',
    params: { missingProperty: 'oneOf' },
    message: "should have required property 'oneOf'"
  },
  {
    keyword: 'oneOf',
    dataPath: '/properties/1/condition',
    schemaPath: '#/definitions/properties/allOf/0/items/properties/condition/oneOf',
    params: { passingSchemas: null },
    message: 'should match exactly one schema in oneOf'
  },
  {
    keyword: 'required',
    dataPath: '/properties/2/condition',
    schemaPath: '#/definitions/properties/allOf/0/items/properties/condition/oneOf/0/required',
    params: { missingProperty: 'equals' },
    message: "should have required property 'equals'"
  },
  {
    keyword: 'type',
    dataPath: '/properties/2/condition/oneOf/0',
    schemaPath: '#/definitions/properties/allOf/0/items/properties/condition/oneOf/1/properties/oneOf/items/type',
    params: { type: [ 'string', 'number' ] },
    message: 'should be string,number'
  },
  {
    keyword: 'type',
    dataPath: '/properties/2/condition/oneOf/1',
    schemaPath: '#/definitions/properties/allOf/0/items/properties/condition/oneOf/1/properties/oneOf/items/type',
    params: { type: [ 'string', 'number' ] },
    message: 'should be string,number'
  },
  {
    keyword: 'oneOf',
    dataPath: '/properties/2/condition',
    schemaPath: '#/definitions/properties/allOf/0/items/properties/condition/oneOf',
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
