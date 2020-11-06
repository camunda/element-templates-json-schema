export const template = {
  'name': 'InvalidCamundaInType',
  'id': 'com.camunda.example.InvalidCamundaInType',
  'appliesTo': [
    'bpmn:Task'
  ],
  'properties': [
    {
      'label': 'foo',
      'type': 'Text',
      'binding': {
        'type': 'camunda:in',
        'variables': 'all'
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
    'message': 'invalid property type "Text" for binding type "camunda:in"; must be any of { String, Hidden, Dropdown }'
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