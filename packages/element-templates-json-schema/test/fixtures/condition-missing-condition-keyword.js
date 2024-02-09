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
      'label': 'input 2',
      'type': 'String',
      'condition': {
        'type': 'simple',
        'property': 'myId'
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
    keyword: 'required',
    dataPath: '/properties/1/condition',
    schemaPath: '#/definitions/properties/allOf/0/items/properties/condition/definitions/condition/oneOf/0/required',
    params: { missingProperty: 'equals' },
    message: "should have required property 'equals'"
  },
  {
    keyword: 'required',
    dataPath: '/properties/1/condition',
    schemaPath: '#/definitions/properties/allOf/0/items/properties/condition/definitions/condition/oneOf/1/required',
    params: { missingProperty: 'oneOf' },
    message: "should have required property 'oneOf'"
  },
  {
    dataPath: '/properties/1/condition',
    keyword: 'required',
    message: "should have required property 'isActive'",
    params: {
      missingProperty: 'isActive'
    },
    schemaPath: '#/definitions/properties/allOf/0/items/properties/condition/definitions/condition/oneOf/2/required'
  },
  {
    keyword: 'oneOf',
    dataPath: '/properties/1/condition',
    schemaPath: '#/definitions/properties/allOf/0/items/properties/condition/definitions/condition/oneOf',
    params: { passingSchemas: null },
    message: 'should match exactly one schema in oneOf'
  },
  {
    keyword: 'required',
    dataPath: '/properties/1/condition',
    schemaPath: '#/allOf/0/items/properties/condition/oneOf/1/required',
    params: { missingProperty: 'allMatch' },
    message: "should have required property 'allMatch'"
  },
  {
    keyword: 'oneOf',
    dataPath: '/properties/1/condition',
    schemaPath: '#/allOf/0/items/properties/condition/oneOf',
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
