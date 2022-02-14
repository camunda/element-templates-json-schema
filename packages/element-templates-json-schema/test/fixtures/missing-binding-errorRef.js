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
        type: 'camunda:errorEventDefinition'
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

export const errors = [
  {
    keyword: 'errorMessage',
    dataPath: '/properties/0/binding',
    schemaPath: '#/definitions/properties/allOf/1/items/properties/binding/allOf/4/then/errorMessage',
    params: {
      errors: [
        {
          keyword: 'required',
          emUsed: true,
          dataPath: '/properties/0/binding',
          schemaPath: '#/definitions/properties/allOf/1/items/properties/binding/allOf/4/then/oneOf/0/required',
          params: { missingProperty: 'errorRef' },
          message: "should have required property 'errorRef'"
        },
        {
          keyword: 'oneOf',
          emUsed: true,
          dataPath: '/properties/0/binding',
          schemaPath: '#/definitions/properties/allOf/1/items/properties/binding/allOf/4/then/oneOf',
          params: { passingSchemas: null },
          message: 'should match exactly one schema in oneOf'
        }
      ]
    },
    message: 'property.binding "camunda:errorEventDefinition" requires errorRef'
  },
  {
    keyword: 'if',
    dataPath: '/properties/0/binding',
    schemaPath: '#/definitions/properties/allOf/1/items/properties/binding/allOf/4/if',
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