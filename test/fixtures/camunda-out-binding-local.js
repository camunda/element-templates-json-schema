export const template = {
  'name': 'CamundaOutBinding',
  'id': 'com.camunda.example.CamundaOutBinding',
  'appliesTo': [
    'bpmn:CallActivity'
  ],
  'properties': [
    {
      'label': 'foo',
      'type': 'String',
      'value': 'varCalled',
      'binding': {
        'type': 'camunda:out',
        'variables': 'local',
        'source': 'var_local_source'
      }
    }
  ]
};

export const errors = null;
