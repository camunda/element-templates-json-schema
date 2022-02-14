export const template = {
  'name': 'MissingBindingVariablesTarget',
  'id': 'com.camunda.example.MissingBindingVariablesTarget',
  'appliesTo': [
    'bpmn:Task'
  ],
  'properties': [
    {
      'label': 'foo',
      'type': 'String',
      'binding': {
        'type': 'camunda:in',
        'target': 'foo'
      }
    },
    {
      'label': 'bar',
      'type': 'String',
      'binding': {
        'type': 'camunda:in'
      }
    }
  ]
};

export const errors = [
  {
    'keyword': 'errorMessage',
    'dataPath': '/properties/1/binding',
    'schemaPath': '#/definitions/properties/allOf/1/items/properties/binding/allOf/2/then/errorMessage',
    'params': {
      'errors': [
        {
          'keyword': 'required',
          'dataPath': '/properties/1/binding',
          'schemaPath': '#/definitions/properties/allOf/1/items/properties/binding/allOf/2/then/anyOf/0/required',
          'params': {
            'missingProperty': 'variables'
          },
          'message': "should have required property 'variables'",
          'emUsed': true
        },
        {
          'keyword': 'required',
          'dataPath': '/properties/1/binding',
          'schemaPath': '#/definitions/properties/allOf/1/items/properties/binding/allOf/2/then/anyOf/1/required',
          'params': {
            'missingProperty': 'target'
          },
          'message': "should have required property 'target'",
          'emUsed': true
        },
        {
          'keyword': 'anyOf',
          'dataPath': '/properties/1/binding',
          'schemaPath': '#/definitions/properties/allOf/1/items/properties/binding/allOf/2/then/anyOf',
          'params': {},
          'message': 'should match some schema in anyOf',
          'emUsed': true
        }
      ]
    },
    'message': 'property.binding "camunda:in" requires variables, target, or both'
  },
  {
    'keyword': 'if',
    'dataPath': '/properties/1/binding',
    'schemaPath': '#/definitions/properties/allOf/1/items/properties/binding/allOf/2/if',
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
