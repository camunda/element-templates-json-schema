export const template = {
  name: 'Error template',
  id: 'error-template',
  appliesTo: [
    'bpmn:ServiceTask'
  ],
  properties: [
    {
      value: 'expression-value',
      type: 'Text',
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

export const errors = [
  {
    keyword: 'errorMessage',
    dataPath: '/properties/0/type',
    schemaPath: '#/definitions/properties/allOf/1/items/allOf/2/then/properties/type/errorMessage',
    params: {
      errors: [
        {
          keyword: 'enum',
          emUsed: true,
          dataPath: '/properties/0/type',
          schemaPath: '#/definitions/properties/allOf/1/items/allOf/2/then/properties/type/enum',
          params: { allowedValues: [ 'String', 'Hidden', 'Dropdown' ] },
          message: 'should be equal to one of the allowed values'
        }
      ]
    },
    message: 'invalid property type "Text" for binding type "camunda:errorEventDefinition"; must be any of { String, Hidden, Dropdown }'
  },
  {
    keyword: 'if',
    dataPath: '/properties/0',
    schemaPath: '#/definitions/properties/allOf/1/items/allOf/2/if',
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