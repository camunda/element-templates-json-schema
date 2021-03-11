export const template = {
  name: 'ConnectorGetTask',
  id: 'my.connector.http.get.Task',
  appliesTo: [
    'bpmn:Task'
  ],
  properties: [],
  scopes: [
    {
      type: 'camunda:Connector',
      properties: [
        {
          label: 'ConnectorId',
          type: 'String',
          value: 'My Connector HTTP - GET',
          binding: {
            type: 'property',
            name: 'connectorId'
          }
        }
      ]
    },
    {
      type: 'camunda:Connector',
      properties: [
        {
          label: 'ConnectorId',
          type: 'String',
          value: 'My Connector HTTP - GET',
          binding: {
            type: 'property',
            name: 'connectorId'
          }
        }
      ]
    }
  ]
};

export const errors = null;