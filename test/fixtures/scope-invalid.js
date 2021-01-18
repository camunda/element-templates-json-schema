export const template = {
  'name': 'ConnectorGetTask',
  'id': 'my.connector.http.get.Task',
  'appliesTo': [
    'bpmn:Task'
  ],
  'properties': [],
  'scopes': {
    'foo': {
      'properties': []
    }
  }
};

export const errors = [
  {
    'keyword': 'errorMessage',
    'dataPath': '/scopes',
    'schemaPath': '#/properties/scopes/errorMessage',
    'params': {
      'errors': [
        {
          'keyword': 'additionalProperties',
          'dataPath': '/scopes',
          'schemaPath': '#/properties/scopes/additionalProperties',
          'params': {
            'additionalProperty': 'foo'
          },
          'message': 'should NOT have additional properties'
        }
      ]
    },
    'message': 'scope must be defined as element type'
  }
];