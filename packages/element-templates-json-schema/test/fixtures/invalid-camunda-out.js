export const template = {
  'name': 'InvalidCamundaOut',
  'id': 'com.camunda.example.InvalidCamundaOut',
  'appliesTo': [
    'bpmn:Task'
  ],
  'properties': [
    {
      'label': 'foo',
      'type': 'String',
      'binding': {
        'type': 'camunda:out',
        'sourceExpression': 'foo'
      }
    },
    {
      'label': 'bar',
      'type': 'String',
      'binding': {
        'type': 'camunda:out'
      }
    }
  ]
};

export const errors = [
  {
    'keyword': 'errorMessage',
    'dataPath': '/properties/1/binding',
    'schemaPath': '#/definitions/properties/allOf/1/items/properties/binding/allOf/3/then/errorMessage',
    'params': {
      'errors': [
        {
          'keyword': 'required',
          'dataPath': '/properties/1/binding',
          'schemaPath': '#/definitions/properties/allOf/1/items/properties/binding/allOf/3/then/oneOf/0/required',
          'params': {
            'missingProperty': 'variables'
          },
          'message': "should have required property 'variables'",
          'emUsed': true
        },
        {
          'keyword': 'required',
          'dataPath': '/properties/1/binding',
          'schemaPath': '#/definitions/properties/allOf/1/items/properties/binding/allOf/3/then/oneOf/1/required',
          'params': {
            'missingProperty': 'source'
          },
          'message': "should have required property 'source'",
          'emUsed': true
        },
        {
          'keyword': 'required',
          'dataPath': '/properties/1/binding',
          'schemaPath': '#/definitions/properties/allOf/1/items/properties/binding/allOf/3/then/oneOf/2/required',
          'params': {
            'missingProperty': 'sourceExpression'
          },
          'message': "should have required property 'sourceExpression'",
          'emUsed': true
        },
        {
          'keyword': 'required',
          'dataPath': '/properties/1/binding',
          'schemaPath': '#/definitions/properties/allOf/1/items/properties/binding/allOf/3/then/oneOf/3/required',
          'params': {
            'missingProperty': 'variables'
          },
          'message': "should have required property 'variables'",
          'emUsed': true
        },
        {
          'keyword': 'required',
          'dataPath': '/properties/1/binding',
          'schemaPath': '#/definitions/properties/allOf/1/items/properties/binding/allOf/3/then/oneOf/3/required',
          'params': {
            'missingProperty': 'sourceExpression'
          },
          'message': "should have required property 'sourceExpression'",
          'emUsed': true
        },
        {
          'keyword': 'required',
          'dataPath': '/properties/1/binding',
          'schemaPath': '#/definitions/properties/allOf/1/items/properties/binding/allOf/3/then/oneOf/4/required',
          'params': {
            'missingProperty': 'variables'
          },
          'message': "should have required property 'variables'",
          'emUsed': true
        },
        {
          'keyword': 'required',
          'dataPath': '/properties/1/binding',
          'schemaPath': '#/definitions/properties/allOf/1/items/properties/binding/allOf/3/then/oneOf/4/required',
          'params': {
            'missingProperty': 'source'
          },
          'message': "should have required property 'source'",
          'emUsed': true
        },
        {
          'keyword': 'oneOf',
          'dataPath': '/properties/1/binding',
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
    'dataPath': '/properties/1/binding',
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
]
;
