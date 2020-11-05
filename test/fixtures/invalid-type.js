export const template = {
  'name': 'InvalidType',
  'id': 'com.camunda.example.InvalidType',
  'appliesTo': [
    'bpmn:Task'
  ],
  'properties': [
    {
      'label': 'Are you awesome?',
      'type': 'Boolean',
      'value': true,
      'binding': {
        'type': 'property',
        'name': 'camunda:asyncBefore'
      }
    },
    {
      'label': 'really?',
      'type': 'Foo',
      'value': true,
      'binding': {
        'type': 'property',
        'name': 'camunda:asyncAfter'
      }
    }
  ]
};

export const errors = [
  {
    'keyword': 'errorMessage',
    'dataPath': '/properties/1/type',
    'schemaPath': '#/properties/properties/items/properties/type/errorMessage',
    'params': {
      'errors': [
        {
          'keyword': 'enum',
          'dataPath': '/properties/1/type',
          'schemaPath': '#/properties/properties/items/properties/type/enum',
          'params': {
            'allowedValues': [
              'Hidden',
              'String',
              'Boolean',
              'Dropdown',
              'Text'
            ]
          },
          'message': 'should be equal to one of the allowed values'
        }
      ]
    },
    'message': 'invalid property type "Foo"; must be any of { Hidden, String, Boolean, Dropdown, Text }'
  }
];