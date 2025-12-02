export const template = {
  name: 'TimerInvalidTimeCycleIntermediateEvent',
  id: 'com.camunda.example.TimerInvalidTimeCycleIntermediateEvent',
  appliesTo: [
    'bpmn:IntermediateCatchEvent'
  ],
  elementType: {
    value: 'bpmn:IntermediateCatchEvent',
    eventDefinition: 'bpmn:TimerEventDefinition'
  },
  properties: [
    {
      label: 'Cycle',
      type: 'String',
      value: 'R5/PT5M',
      binding: {
        type: 'bpmn:TimerEventDefinition#property',
        name: 'timeCycle'
      }
    }
  ]
};

export const errors = [
  {
    keyword: 'not',
    dataPath: '/properties',
    schemaPath: '#/allOf/1/allOf/11/allOf/2/then/properties/properties/not',
    params: {},
    message: 'should NOT be valid'
  },
  {
    keyword: 'if',
    dataPath: '',
    schemaPath: '#/allOf/1/allOf/11/allOf/2/if',
    params: {
      failingKeyword: 'then'
    },
    message: 'should match "then" schema'
  },
  {
    keyword: 'type',
    dataPath: '',
    schemaPath: '#/oneOf/1/type',
    params: {
      type: 'array'
    },
    message: 'should be array'
  },
  {
    keyword: 'oneOf',
    dataPath: '',
    schemaPath: '#/oneOf',
    params: {
      passingSchemas: null
    },
    message: 'should match exactly one schema in oneOf'
  }
];
