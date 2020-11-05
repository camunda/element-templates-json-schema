export const template = {
  'name': 'MissingBinding',
  'id': 'com.camunda.example.MissingBinding',
  'appliesTo': [
    'bpmn:Task'
  ],
  'properties': [
    {
      'label': 'Are you awesome?',
      'type': 'String',
      'value': true
    }
  ]
};

export const errors = [
  {
    keyword: 'required',
    dataPath: '/properties/0',
    schemaPath: '#/properties/properties/items/required',
    params: { missingProperty: 'binding' },
    message: "should have required property 'binding'"
  }
];