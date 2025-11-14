export const template = {
  name: 'MissingEventDefinition',
  id: 'com.camunda.example.MissingEventDefinition',
  appliesTo: [
    'bpmn:IntermediateCatchEvent'
  ],
  elementType: {
    value: 'bpmn:IntermediateCatchEvent'
  },
  properties: [
    {
      label: 'Signal Name',
      type: 'String',
      binding: {
        type: 'bpmn:Signal#property',
        name: 'name'
      }
    }
  ]
};

export const errors = [
  {
    keyword: 'required',
    dataPath: '/elementType',
    schemaPath: '#/allOf/1/allOf/10/allOf/0/then/properties/elementType/required',
    params: {
      missingProperty: 'eventDefinition'
    },
    message: 'should have required property \'eventDefinition\''
  },
  {
    keyword: 'if',
    dataPath: '',
    schemaPath: '#/allOf/1/allOf/10/allOf/0/if',
    params: {
      failingKeyword: 'then'
    },
    message: 'should match "then" schema'
  },
  {
    dataPath: '',
    keyword: 'type',
    message: 'should be array',
    params: {
      type: 'array'
    },
    schemaPath: '#/oneOf/1/type'
  },
  {
    dataPath: '',
    keyword: 'oneOf',
    message: 'should match exactly one schema in oneOf',
    params: {
      passingSchemas: null
    },
    schemaPath: '#/oneOf'
  }
];
