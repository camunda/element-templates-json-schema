export const template = {
  'name': 'Optional',
  'id': 'io.camunda:optional:1',
  'kind': 'CREDENTIAL',
  'version': 1,
  'properties': [
    {
      'label': 'Token',
      'type': 'String',
      'optional': true,
      'binding': { 'type': 'property', 'name': 'token' }
    }
  ]
};

export const valid = false;
