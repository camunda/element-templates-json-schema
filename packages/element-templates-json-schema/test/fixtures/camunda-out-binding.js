export const template = {
  'name': 'CamundaOutBinding',
  'id': 'com.camunda.example.CamundaOutBinding',
  'appliesTo': [
    'bpmn:Task'
  ],
  'properties': [
    {
      'label': 'foo',
      'type': 'String',
      'binding': {
        'type': 'camunda:out',
        'variables': 'all'
      }
    }
  ]
};

export const errors = null;