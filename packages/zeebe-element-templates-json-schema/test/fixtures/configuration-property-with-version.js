export const template = {
  'name': 'Connector with versioned credential',
  'id': 'io.camunda.example.VersionedCredential',
  'appliesTo': [
    'bpmn:ServiceTask'
  ],
  'properties': [
    {
      'id': 'authConfig',
      'type': 'Configuration',
      'label': 'Provider credential',
      'configurationTemplate': 'io.camunda:aws-credential:1',
      'configurationTemplateVersion': 2,
      'binding': {
        'type': 'zeebe:input',
        'name': 'auth'
      }
    }
  ]
};

export const errors = null;
