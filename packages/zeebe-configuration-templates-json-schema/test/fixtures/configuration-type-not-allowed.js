export const template = {
  'name': 'Nested Configuration',
  'id': 'io.camunda:nested:1',
  'kind': 'CREDENTIAL',
  'version': 1,
  'properties': [
    {
      'label': 'Nested',
      'type': 'Configuration',
      'binding': { 'type': 'property', 'name': 'nested' }
    }
  ]
};

export const valid = false;
