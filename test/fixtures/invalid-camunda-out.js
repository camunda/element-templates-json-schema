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
    'schemaPath': '#/properties/properties/items/properties/binding/allOf/3/then/errorMessage',
    'params': {
      'errors': [
        {
          'keyword': 'required',
          'dataPath': '/properties/1/binding',
          'schemaPath': '#/properties/properties/items/properties/binding/allOf/3/then/oneOf/0/required',
          'params': {
            'missingProperty': 'variables'
          },
          'message': "should have required property 'variables'"
        },
        {
          'keyword': 'required',
          'dataPath': '/properties/1/binding',
          'schemaPath': '#/properties/properties/items/properties/binding/allOf/3/then/oneOf/1/required',
          'params': {
            'missingProperty': 'source'
          },
          'message': "should have required property 'source'"
        },
        {
          'keyword': 'required',
          'dataPath': '/properties/1/binding',
          'schemaPath': '#/properties/properties/items/properties/binding/allOf/3/then/oneOf/2/required',
          'params': {
            'missingProperty': 'sourceExpression'
          },
          'message': "should have required property 'sourceExpression'"
        },
        {
          'keyword': 'oneOf',
          'dataPath': '/properties/1/binding',
          'schemaPath': '#/properties/properties/items/properties/binding/allOf/3/then/oneOf',
          'params': {
            'passingSchemas': null
          },
          'message': 'should match exactly one schema in oneOf'
        }
      ]
    },
    'message': 'property.binding "camunda:out" requires variables, sourceExpression or source'
  },
  {
    'keyword': 'if',
    'dataPath': '/properties/1/binding',
    'schemaPath': '#/properties/properties/items/properties/binding/allOf/3/if',
    'params': {
      'failingKeyword': 'then'
    },
    'message': 'should match "then" schema'
  }
];