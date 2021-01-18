export const template = {
  'name': 'MissingChoices',
  'id': 'com.camunda.example.MissingChoices',
  'appliesTo': [
    'bpmn:Task'
  ],
  'properties': [
    {
      'label': 'Are you awesome?',
      'type': 'Dropdown',
      'value': true,
      'binding': {
        'type': 'property',
        'name': 'foo'
      }
    }
  ]
};

export const errors = [
  {
    'keyword': 'errorMessage',
    'dataPath': '/properties/0',
    'schemaPath': '#/definitions/properties/items/allOf/0/then/errorMessage',
    'params': {
      'errors': [
        {
          'keyword': 'required',
          'dataPath': '/properties/0',
          'schemaPath': '#/definitions/properties/items/allOf/0/then/required',
          'params': {
            'missingProperty': 'choices'
          },
          'message': "should have required property 'choices'"
        }
      ]
    },
    'message': 'must provide choices=[] with "Dropdown" type'
  },
  {
    'keyword': 'if',
    'dataPath': '/properties/0',
    'schemaPath': '#/definitions/properties/items/allOf/0/if',
    'params': {
      'failingKeyword': 'then'
    },
    'message': 'should match "then" schema'
  }
];