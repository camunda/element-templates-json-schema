export const template = {
  'name': 'Zeebe Property Type',
  'id': 'com.camunda.example.ZeebePropertyType',
  'appliesTo': [
    'bpmn:Task'
  ],
  'properties': [
    {
      'label': 'static (string)',
      'type': 'String',
      'value': '1',
      'binding': {
        'type': 'zeebe:property',
        'name': 'static'
      }
    },
    {
      'label': 'dynamic (text)',
      'type': 'Text',
      'value': '1',
      'binding': {
        'type': 'zeebe:property',
        'name': 'dynamic'
      },
      'feel': 'required'
    },
    {
      'label': 'optional (string)',
      'type': 'String',
      'binding': {
        'type': 'zeebe:property',
        'name': 'optional'
      },
      'optional': true
    }
  ]
};

export const errors = null;