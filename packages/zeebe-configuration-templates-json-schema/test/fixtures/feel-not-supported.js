export const template = {
  'name': 'Feel',
  'id': 'io.camunda:feel:1',
  'kind': 'CREDENTIAL',
  'version': 1,
  'properties': [
    {
      'label': 'Expression',
      'type': 'String',
      'feel': 'optional',
      'binding': { 'type': 'property', 'name': 'expression' }
    }
  ]
};

export const valid = false;
