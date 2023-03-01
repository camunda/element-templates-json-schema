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
    'dataPath': '/properties/2/condition',
    'keyword': 'required',
    'message': "should have required property 'equals'",
    'params': {
      'missingProperty': 'equals'
    },
    'schemaPath': '#/definitions/properties/allOf/0/items/properties/condition/definitions/condition/oneOf/0/required'
  },
  {
    'dataPath': '/properties/2/condition',
    'keyword': 'required',
    'message': "should have required property 'oneOf'",
    'params': {
      'missingProperty': 'oneOf'
    },
    'schemaPath': '#/definitions/properties/allOf/0/items/properties/condition/definitions/condition/oneOf/1/required'
  },
  {
    'dataPath': '/properties/2/condition',
    'keyword': 'oneOf',
    'message': 'should match exactly one schema in oneOf',
    'params': {
      'passingSchemas': null
    },
    'schemaPath': '#/definitions/properties/allOf/0/items/properties/condition/definitions/condition/oneOf'
  },
  {
    'dataPath': '/properties/2/condition',
    'keyword': 'errorMessage',
    'message': 'missing property name for condition',
    'params': {
      'errors': [
        {
          'keyword': 'required',
          'dataPath': '/properties/2/condition',
          'emUsed': true,
          'schemaPath': '#/definitions/properties/allOf/0/items/properties/condition/definitions/condition/required',
          'params': {
            'missingProperty': 'property'
          },
          'message': "should have required property 'property'"
        },
      ]
    },
    'schemaPath': '#/definitions/properties/allOf/0/items/properties/condition/definitions/condition/errorMessage'
  },
  {
    'dataPath': '/properties/2/condition/allMatch',
    'keyword': 'minItems',
    'message': 'should NOT have fewer than 1 items',
    'params': {
      'limit': 1
    },
    'schemaPath': '#/allOf/0/items/properties/condition/oneOf/1/properties/allMatch/minItems'
  },
  {
    'dataPath': '/properties/2/condition',
    'keyword': 'oneOf',
    'message': 'should match exactly one schema in oneOf',
    'params': {
      'passingSchemas': null
    },
    'schemaPath': '#/allOf/0/items/properties/condition/oneOf'
  },
  {
    'dataPath': '',
    'keyword': 'type',
    'message': 'should be array',
    'params': {
      'type': 'array'
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