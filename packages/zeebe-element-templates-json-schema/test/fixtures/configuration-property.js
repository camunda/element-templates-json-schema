export const template = {
  'name': 'Connector with credential',
  'id': 'io.camunda.example.ConnectorWithCredential',
  'appliesTo': [
    'bpmn:ServiceTask'
  ],
  'properties': [
    {
      'id': 'authConfig',
      'type': 'Configuration',
      'label': 'Provider credential',
      'configurationTemplate': 'io.camunda:aws-credential:1',
      'binding': {
        'type': 'zeebe:input',
        'name': 'auth'
      }
    }
  ],
  'configurationTemplates': [
    {
      'name': 'AWS Credential',
      'id': 'io.camunda:aws-credential:1',
      'kind': 'CREDENTIAL',
      'version': 1,
      'properties': [
        {
          'label': 'Access key',
          'type': 'String',
          'secret': true,
          'binding': {
            'type': 'property',
            'name': 'accessKey'
          }
        }
      ]
    }
  ]
};

export const errors = null;
