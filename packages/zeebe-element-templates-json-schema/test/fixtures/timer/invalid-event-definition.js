export const template = {
  name: 'TimerInvalidEventDefinition',
  id: 'com.camunda.example.TimerInvalidEventDefinition',
  appliesTo: [
    'bpmn:EndEvent'
  ],
  elementType: {
    value: 'bpmn:EndEvent',
    eventDefinition: 'bpmn:TimerEventDefinition'
  },
  properties: [
    {
      label: 'Some Duration',
      type: 'String',
      value: 'PT1M',
      binding: {
        type: 'bpmn:TimerEventDefinition#property',
        name: 'timeDuration'
      }
    }
  ]
};

export const errors = [
  {
    keyword: 'enum',
    dataPath: '/elementType/value',
    schemaPath: '#/allOf/1/allOf/11/allOf/0/then/properties/elementType/properties/value/enum',
    params: {
      allowedValues: [
        'bpmn:StartEvent',
        'bpmn:IntermediateCatchEvent',
        'bpmn:BoundaryEvent'
      ]
    },
    message: 'should be equal to one of the allowed values'
  },
  {
    keyword: 'if',
    dataPath: '',
    schemaPath: '#/allOf/1/allOf/11/allOf/0/if',
    params: {
      failingKeyword: 'then'
    },
    message: 'should match "then" schema'
  },
  {
    keyword: 'enum',
    dataPath: '/elementType/value',
    schemaPath: '#/properties/elementType/allOf/0/allOf/2/then/properties/value/enum',
    params: {
      allowedValues: [
        'bpmn:StartEvent',
        'bpmn:IntermediateCatchEvent',
        'bpmn:BoundaryEvent'
      ]
    },
    message: 'should be equal to one of the allowed values'
  },
  {
    keyword: 'if',
    dataPath: '/elementType',
    schemaPath: '#/properties/elementType/allOf/0/allOf/2/if',
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
