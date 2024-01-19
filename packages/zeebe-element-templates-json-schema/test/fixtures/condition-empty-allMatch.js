export const template = {
  'name': 'Condition',
  'id': 'example.com.condition',
  'appliesTo': [
    'bpmn:ServiceTask'
  ],
  'properties': [
    {
      'id': 'prop1',
      'label': 'input 1',
      'type': 'String',
      'binding': {
        'type': 'property',
        'name': 'input1'
      }
    },
    {
      'id': 'prop2',
      'label': 'input 2',
      'type': 'String',
      'binding': {
        'type': 'property',
        'name': 'input2'
      }
    },
    {
      'label': 'equals (string)',
      'type': 'String',
      'condition': {
        'allMatch': []

      },
      'binding': {
        'type': 'property',
        'name': 'input2'
      }
    },
  ]
};

export const errors = [
  {
    'keyword': 'required',
    'dataPath': '/properties/2/condition',
    'schemaPath': '#/definitions/properties/allOf/0/items/allOf/1/definitions/condition/oneOf/0/required',
    'params': { missingProperty: 'equals' },
    'message': "should have required property 'equals'"
  },
  {
    'keyword': 'required',
    'dataPath': '/properties/2/condition',
    'schemaPath': '#/definitions/properties/allOf/0/items/allOf/1/definitions/condition/oneOf/1/required',
    'params': { missingProperty: 'oneOf' },
    'message': "should have required property 'oneOf'"
  },
  {
    'keyword': 'required',
    'dataPath': '/properties/2/condition',
    'schemaPath': '#/definitions/properties/allOf/0/items/allOf/1/definitions/condition/oneOf/2/required',
    'params': { missingProperty: 'isActive' },
    'message': "should have required property 'isActive'"
  },
  {
    keyword: 'oneOf',
    dataPath: '/properties/2/condition',
    schemaPath: '#/definitions/properties/allOf/0/items/allOf/1/definitions/condition/oneOf',
    params: { passingSchemas: null },
    message: 'should match exactly one schema in oneOf'
  },
  {
    keyword: 'errorMessage',
    dataPath: '/properties/2/condition',
    schemaPath: '#/definitions/properties/allOf/0/items/allOf/1/definitions/condition/errorMessage',
    params: {
      errors: [
        {
          keyword: 'required',
          dataPath: '/properties/2/condition',
          schemaPath: '#/definitions/properties/allOf/0/items/allOf/1/definitions/condition/required',
          params: { missingProperty: 'property' },
          message: "should have required property 'property'",
          emUsed: true
        }
      ]
    },
    message: 'missing property name for condition'
  },
  {
    keyword: 'minItems',
    dataPath: '/properties/2/condition/allMatch',
    schemaPath: '#/allOf/0/items/allOf/1/properties/condition/oneOf/1/properties/allMatch/minItems',
    params: { limit: 1 },
    message: 'should NOT have fewer than 1 items'
  },
  {
    keyword: 'oneOf',
    dataPath: '/properties/2/condition',
    schemaPath: '#/allOf/0/items/allOf/1/properties/condition/oneOf',
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