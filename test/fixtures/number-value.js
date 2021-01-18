export const template = {
  'name': 'NumberAsValue',
  'id': 'com.camunda.example.NumberAsValue',
  'appliesTo': [
    'bpmn:Task'
  ],
  'properties': [
    {
      'label': 'Are you awesome?',
      'type': 'String',
      'value': 50,
      'binding': {
        'type': 'property',
        'name': 'camunda:asyncBefore'
      }
    }
  ]
};

export const errors = [
  {
    'keyword': 'type',
    'dataPath': '/properties/0/value',
    'schemaPath': '#/definitions/properties/items/properties/value/type',
    'params': {
      'type': 'string,boolean'
    },
    'message': 'should be string,boolean'
  }
];