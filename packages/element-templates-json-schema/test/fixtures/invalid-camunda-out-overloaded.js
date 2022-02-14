export const template = {
  'name': 'InvalidCamundaOut',
  'id': 'com.camunda.example.InvalidCamundaOutOverloaded',
  'appliesTo': [
    'bpmn:CallActivity'
  ],
  'properties': [
    {
      'label': 'foo',
      'type': 'String',
      'binding': {
        'type': 'camunda:out',
        'sourceExpression': 'foo',
        'source': 'bar'
      }
    }
  ]
};

export const errors = [
  {
    'keyword': 'errorMessage',
    'dataPath': '/properties/0/binding',
    'schemaPath': '#/definitions/properties/allOf/1/items/properties/binding/allOf/3/then/errorMessage',
    'params': {
      'errors': [
        {
          'keyword': 'not',
          'dataPath': '/properties/0/binding',
          'schemaPath': '#/definitions/properties/allOf/1/items/properties/binding/allOf/3/then/oneOf/0/not',
          'params': {},
          'message': 'should NOT be valid',
          'emUsed': true
        },
        {
          'keyword': 'required',
          'dataPath': '/properties/0/binding',
          'schemaPath': '#/definitions/properties/allOf/1/items/properties/binding/allOf/3/then/oneOf/0/required',
          'params': {
            'missingProperty': 'variables'
          },
          'message': "should have required property 'variables'",
          'emUsed': true
        },
        {
          'keyword': 'not',
          'dataPath': '/properties/0/binding',
          'schemaPath': '#/definitions/properties/allOf/1/items/properties/binding/allOf/3/then/oneOf/1/not',
          'params': {},
          'message': 'should NOT be valid',
          'emUsed': true
        },
        {
          'keyword': 'not',
          'dataPath': '/properties/0/binding',
          'schemaPath': '#/definitions/properties/allOf/1/items/properties/binding/allOf/3/then/oneOf/2/not',
          'params': {},
          'message': 'should NOT be valid',
          'emUsed': true
        },
        {
          'keyword': 'not',
          'dataPath': '/properties/0/binding',
          'schemaPath': '#/definitions/properties/allOf/1/items/properties/binding/allOf/3/then/oneOf/3/not',
          'params': {},
          'message': 'should NOT be valid',
          'emUsed': true
        },
        {
          'keyword': 'required',
          'dataPath': '/properties/0/binding',
          'schemaPath': '#/definitions/properties/allOf/1/items/properties/binding/allOf/3/then/oneOf/3/required',
          'params': {
            'missingProperty': 'variables'
          },
          'message': "should have required property 'variables'",
          'emUsed': true
        },
        {
          'keyword': 'not',
          'dataPath': '/properties/0/binding',
          'schemaPath': '#/definitions/properties/allOf/1/items/properties/binding/allOf/3/then/oneOf/4/not',
          'params': {},
          'message': 'should NOT be valid',
          'emUsed': true
        },
        {
          'keyword': 'required',
          'dataPath': '/properties/0/binding',
          'schemaPath': '#/definitions/properties/allOf/1/items/properties/binding/allOf/3/then/oneOf/4/required',
          'params': {
            'missingProperty': 'variables'
          },
          'message': "should have required property 'variables'",
          'emUsed': true
        },
        {
          'keyword': 'oneOf',
          'dataPath': '/properties/0/binding',
          'schemaPath': '#/definitions/properties/allOf/1/items/properties/binding/allOf/3/then/oneOf',
          'params': {
            'passingSchemas': null
          },
          'message': 'should match exactly one schema in oneOf',
          'emUsed': true
        }
      ]
    },
    'message': 'property.binding "camunda:out" requires one of the following: variables, sourceExpression, source, (sourceExpression and variables), or (source and variables)'
  },
  {
    'keyword': 'if',
    'dataPath': '/properties/0/binding',
    'schemaPath': '#/definitions/properties/allOf/1/items/properties/binding/allOf/3/if',
    'params': {
      'failingKeyword': 'then'
    },
    'message': 'should match "then" schema'
  },
  {
    'keyword': 'type',
    'dataPath': '',
    'schemaPath': '#/oneOf/1/type',
    'params': {
      'type': 'array'
    },
    'message': 'should be array'
  },
  {
    'keyword': 'oneOf',
    'dataPath': '',
    'schemaPath': '#/oneOf',
    'params': {
      'passingSchemas': null
    },
    'message': 'should match exactly one schema in oneOf'
  }
];
