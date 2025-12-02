export const template = {
  name: 'TimerInvalidElementType',
  id: 'com.camunda.example.TimerInvalidElementType',
  appliesTo: [
    'bpmn:Task'
  ],
  elementType: {
    value: 'bpmn:ServiceTask'
  },
  properties: [
    {
      label: 'Duration',
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
    keyword: 'errorMessage',
    dataPath: '/elementType',
    schemaPath: '#/allOf/1/allOf/11/allOf/0/then/properties/elementType/errorMessage',
    params: {
      errors: [
        {
          keyword: 'required',
          dataPath: '/elementType',
          schemaPath: '#/allOf/1/allOf/11/allOf/0/then/properties/elementType/required',
          params: {
            missingProperty: 'eventDefinition'
          },
          message: 'should have required property \'eventDefinition\'',
          emUsed: true
        }
      ]
    },
    message: 'Timer bindings require elementType.eventDefinition to equal "bpmn:TimerEventDefinition"'
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
