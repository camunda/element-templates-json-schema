export const template = {
  name: 'TimerMultipleProperties',
  id: 'com.camunda.example.TimerMultipleProperties',
  appliesTo: [
    'bpmn:BoundaryEvent'
  ],
  elementType: {
    value: 'bpmn:BoundaryEvent',
    eventDefinition: 'bpmn:TimerEventDefinition'
  },
  properties: [
    {
      label: 'Date',
      type: 'String',
      value: '2025-12-24T10:00:00Z',
      binding: {
        type: 'bpmn:TimerEventDefinition#property',
        name: 'timeDate'
      }
    },
    {
      label: 'Cycle',
      type: 'String',
      value: 'R/PT1H',
      binding: {
        type: 'bpmn:TimerEventDefinition#property',
        name: 'timeCycle'
      }
    }
  ]
};

export const errors = [
  {
    keyword: 'errorMessage',
    dataPath: '/properties',
    schemaPath: '#/allOf/1/allOf/11/allOf/1/then/properties/properties/errorMessage',
    params: {
      errors: [
        {
          keyword: 'oneOf',
          dataPath: '/properties',
          schemaPath: '#/allOf/1/allOf/11/allOf/1/then/properties/properties/oneOf',
          params: {
            passingSchemas: [
              0,
              1
            ]
          },
          message: 'should match exactly one schema in oneOf',
          emUsed: true
        }
      ]
    },
    message: 'Template with elementType.eventDefinition="bpmn:TimerEventDefinition" must have exactly one binding with type "bpmn:TimerEventDefinition#property" and name "timeDate", "timeCycle", or "timeDuration".'
  },
  {
    keyword: 'if',
    dataPath: '',
    schemaPath: '#/allOf/1/allOf/11/allOf/1/if',
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
