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

export const errors = [
  {
    keyword: 'errorMessage',
    dataPath: '/scopes/0',
    schemaPath: '#/properties/scopes/items/allOf/0/then/errorMessage',
    params: {
      errors: [
        {
          keyword: 'required',
          dataPath: '/scopes/0',
          schemaPath: '#/properties/scopes/items/allOf/0/then/required',
          params: { missingProperty: 'id' },
          emUsed: true,
          message: "should have required property 'id'"
        }
      ]
    },
    message: 'invalid scope "bpmn:Error", missing id'
  },
  {
    keyword: 'if',
    dataPath: '/scopes/0',
    schemaPath: '#/properties/scopes/items/allOf/0/if',
    params: { failingKeyword: 'then' },
    message: 'should match "then" schema'
  },
  {
    keyword: 'type',
    dataPath: '',
    schemaPath: '#/oneOf/1/type',
    params: { type: 'array' },
    message: 'should be array'
  },
  {
    keyword: 'oneOf',
    dataPath: '',
    schemaPath: '#/oneOf',
    params: { passingSchemas: null },
    message: 'should match exactly one schema in oneOf'
  }
];