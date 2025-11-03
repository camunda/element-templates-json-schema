export const template = {
  name: 'WrongEventDefinition',
  id: 'com.camunda.example.WrongEventDefinition',
  appliesTo: [
    'bpmn:IntermediateCatchEvent'
  ],
  elementType: {
    value: 'bpmn:IntermediateCatchEvent',
    eventDefinition: 'bpmn:MessageEventDefinition'
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
    keyword: 'const',
    dataPath: '/elementType/eventDefinition',
    schemaPath: '#/allOf/1/allOf/10/allOf/0/then/properties/elementType/properties/eventDefinition/const',
    params: {
      allowedValue: 'bpmn:SignalEventDefinition'
    },
    message: 'should be equal to constant'
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
