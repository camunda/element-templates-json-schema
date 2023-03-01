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
        'type': 'made-up',
        'property': 'myId',
        'equals': 'foo'
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
    'dataPath': '/properties/1/condition/type',
    'keyword': 'const',
    'message': 'should be equal to constant',
    'params': {
      'allowedValue': 'simple'
    },
    'schemaPath': '#/definitions/properties/allOf/0/items/properties/condition/definitions/condition/properties/type/const'
  },
  {
    'keyword': 'required',
    'dataPath': '/properties/1/condition',
    'schemaPath': '#/allOf/0/items/properties/condition/oneOf/1/required',
    'params': {
      'missingProperty': 'allMatch'
    },
    'message': "should have required property 'allMatch'"
  },
  {
    'keyword': 'oneOf',
    'dataPath': '/properties/1/condition',
    'schemaPath': '#/allOf/0/items/properties/condition/oneOf',
    'params': {
      'passingSchemas': null
    },
    'message': 'should match exactly one schema in oneOf'
  },
  {
    'dataPath': '',
    'keyword': 'type',
    'message': 'should be array',
    'params': {
      'type': 'array',
    },
    'schemaPath': '#/oneOf/1/type'
  },
  {
    'dataPath': '',
    'keyword': 'oneOf',
    'message': 'should match exactly one schema in oneOf',
    'params': {
      'passingSchemas': null
    },
    'schemaPath': '#/oneOf'
  }
];
