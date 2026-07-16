export const template = {
  'name': 'Invalid Binding',
  'id': 'io.camunda:invalid-binding:1',
  'kind': 'CREDENTIAL',
  'version': 1,
  'properties': [
    {
      'label': 'Input',
      'type': 'String',
      'binding': { 'type': 'zeebe:input', 'name': 'input' }
    }
  ]
};

export const valid = false;
