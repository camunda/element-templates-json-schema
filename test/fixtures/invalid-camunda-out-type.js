export const template = {
  'name': 'InvalidCamundaOutType',
  'id': 'com.camunda.example.InvalidCamundaOutType',
  'appliesTo': [
    'bpmn:Task'
  ],
  'properties': [
    {
      'label': 'foo',
      'type': 'Text',
      'binding': {
        'type': 'camunda:out',
        'sourceExpression': 'foo'
      }
    }
  ]
};

export const errors = [
  {
    'keyword': 'errorMessage',
    'dataPath': '/properties/0/type',
    'schemaPath': '#/properties/properties/items/allOf/3/then/properties/type/errorMessage',
    'params': {
      'errors': [
        {
          'keyword': 'enum',
          'dataPath': '/properties/0/type',
          'schemaPath': '#/properties/properties/items/allOf/3/then/properties/type/enum',
          'params': {
            'allowedValues': [
              'String',
              'Hidden',
              'Dropdown'
            ]
          },
          'message': 'should be equal to one of the allowed values'
        }
      ]
    },
    'message': 'invalid property type "Text" for binding type "camunda:out"; must be any of { String, Hidden, Dropdown }'
  },
  {
    'keyword': 'if',
    'dataPath': '/properties/0',
    'schemaPath': '#/properties/properties/items/allOf/3/if',
    'params': {
      'failingKeyword': 'then'
    },
    'message': 'should match "then" schema'
  }
];