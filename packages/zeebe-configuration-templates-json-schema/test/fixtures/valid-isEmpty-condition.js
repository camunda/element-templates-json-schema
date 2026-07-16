export const template = {
  'name': 'Conditional',
  'id': 'io.camunda:conditional:1',
  'kind': 'CREDENTIAL',
  'version': 1,
  'properties': [
    {
      'id': 'token',
      'label': 'Token',
      'type': 'String',
      'binding': { 'type': 'property', 'name': 'token' }
    },
    {
      'label': 'Fallback',
      'type': 'String',
      'binding': { 'type': 'property', 'name': 'fallback' },
      'condition': { 'property': 'token', 'isEmpty': true }
    }
  ]
};

export const valid = true;
