export const template = {
  name: 'Error template',
  id: 'error-template',
  appliesTo: [
    'bpmn:ServiceTask'
  ],
  properties: [
    {
      value: 'expression-value',
      binding: {
        type: 'camunda:errorEventDefinition',
        errorRef: 'Error_1'
      }
    }
  ],
  scopes: [
    {
      type: 'bpmn:Error',
      id: 'Error_1',
      properties: [
        {
          value: 'error-code',
          binding: {
            type: 'property',
            name: 'errorCode'
          }
        },
        {
          value: 'error-message',
          binding: {
            type: 'property',
            name: 'camunda:errorMessage'
          }
        },
        {
          value: 'error-name',
          binding: {
            type: 'property',
            name: 'name'
          }
        }
      ]
    }
  ]
};

export const errors = null;