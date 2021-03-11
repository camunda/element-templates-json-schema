export const template = {
  name: 'eventDefinitionDraft',
  id: 'max.eventDefinitionDraft',
  appliesTo: [
    'bpmn:ServiceTask'
  ],
  properties: [
    {
      label: 'errorNameA',
      value: '${ true }',
      binding: {
        type: 'camunda:errorEventDefinition',
        errorRef: 'error1'
      }
    },
    {
      label: 'errorNameB',
      value: '${ someVar == 123 }',
      binding: {
        type: 'camunda:errorEventDefinition',
        errorRef: 'error2'
      }
    }
  ],
  scopes: [
    {
      type: 'bpmn:Error',
      id: 'error1',
      properties: [
        {
          label: 'Error Code',
          type: 'Hidden',
          value: 'my Error code',
          binding: {
            type: 'property',
            name: 'errorCode'
          }
        },
        {
          label: 'Error Message',
          type: 'Hidden',
          value: 'my Error message',
          binding: {
            type: 'property',
            name: 'camunda:errorMessage'
          }
        },
        {
          label: 'Error Name',
          type: 'Hidden',
          value: 'my Error Name',
          binding: {
            type: 'property',
            name: 'name'
          }
        }
      ]
    },
    {
      type: 'bpmn:Error',
      id: 'error2',
      properties: [
        {
          label: 'Error Code',
          type: 'Hidden',
          value: '405',
          binding: {
            type: 'property',
            name: 'errorCode'
          }
        },
        {
          label: 'Error Message',
          type: 'Hidden',
          value: '',
          binding: {
            type: 'property',
            name: 'camunda:errorMessage'
          }
        },
        {
          label: 'Error Name',
          type: 'Hidden',
          value: 'errorNameB',
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