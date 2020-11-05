export const template = {
  'name': 'ChoicesMissingValue',
  'id': 'com.camunda.example.ChoicesMissingValue',
  'appliesTo': [
    'bpmn:Task'
  ],
  'properties': [
    {
      'label': 'random dropdown',
      'type': 'Dropdown',
      'choices': [
        { 'name': 'low', 'value': '20' },
        { 'name': 'medium' },
        { 'name': 'height', 'value': '100' }
      ],
      'binding': {
        'type': 'property',
        'name': 'camunda:priority'
      }
    }
  ]
};

export const errors = [
  {
    'keyword': 'errorMessage',
    'dataPath': '/properties/0/choices/1',
    'schemaPath': '#/properties/properties/items/properties/choices/items/errorMessage',
    'params': {
      'errors': [
        {
          'keyword': 'required',
          'dataPath': '/properties/0/choices/1',
          'schemaPath': '#/properties/properties/items/properties/choices/items/required',
          'params': {
            'missingProperty': 'value'
          },
          'message': "should have required property 'value'"
        }
      ]
    },
    'message': '{ name, value } must be specified for "Dropdown" choices'
  }
];