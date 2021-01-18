export const template = {
  'name': 'ConnectorGetTask',
  'id': 'my.connector.http.get.Task',
  'appliesTo': [
    'bpmn:Task'
  ],
  'properties': [],
  'scopes': {
    'camunda:Connector': {
      'properties': [
        {
          'label': 'ConnectorId',
          'type': 'String',
          'value': 'My Connector HTTP - GET'
        }
      ]
    }
  }
};

export const errors = [
  {
    keyword: 'required',
    dataPath: '/scopes/camunda:Connector/properties/0',
    schemaPath: '#/definitions/properties/items/required',
    params: { missingProperty: 'binding' },
    message: "should have required property 'binding'"
  }
];