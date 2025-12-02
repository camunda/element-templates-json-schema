export const template = {
  name: 'TimerMissingProperty',
  id: 'com.camunda.example.TimerMissingProperty',
  appliesTo: [
    'bpmn:BoundaryEvent'
  ],
  elementType: {
    value: 'bpmn:BoundaryEvent',
    eventDefinition: 'bpmn:TimerEventDefinition'
  },
  properties: [
    {
      label: 'Some unrelated property',
      type: 'String',
      binding: {
        type: 'zeebe:input',
        name: 'input'
      }
    }
  ]
};

export const errors = [
  {
    keyword: 'const',
    dataPath: '/properties/0/binding/type',
    schemaPath: '#/definitions/template/allOf/1/allOf/11/$defs/timeDateProperty/properties/binding/properties/type/const',
    params: {
      allowedValue: 'bpmn:TimerEventDefinition#property'
    },
    message: 'should be equal to constant'
  },
  {
    keyword: 'const',
    dataPath: '/properties/0/binding/name',
    schemaPath: '#/definitions/template/allOf/1/allOf/11/$defs/timeDateProperty/properties/binding/properties/name/const',
    params: {
      allowedValue: 'timeDate'
    },
    message: 'should be equal to constant'
  },
  {
    keyword: 'const',
    dataPath: '/properties/0/binding/type',
    schemaPath: '#/definitions/template/allOf/1/allOf/11/$defs/timeCycleProperty/properties/binding/properties/type/const',
    params: {
      allowedValue: 'bpmn:TimerEventDefinition#property'
    },
    message: 'should be equal to constant'
  },
  {
    keyword: 'const',
    dataPath: '/properties/0/binding/name',
    schemaPath: '#/definitions/template/allOf/1/allOf/11/$defs/timeCycleProperty/properties/binding/properties/name/const',
    params: {
      allowedValue: 'timeCycle'
    },
    message: 'should be equal to constant'
  },
  {
    keyword: 'const',
    dataPath: '/properties/0/binding/type',
    schemaPath: '#/definitions/template/allOf/1/allOf/11/$defs/timeDurationProperty/properties/binding/properties/type/const',
    params: {
      allowedValue: 'bpmn:TimerEventDefinition#property'
    },
    message: 'should be equal to constant'
  },
  {
    keyword: 'const',
    dataPath: '/properties/0/binding/name',
    schemaPath: '#/definitions/template/allOf/1/allOf/11/$defs/timeDurationProperty/properties/binding/properties/name/const',
    params: {
      allowedValue: 'timeDuration'
    },
    message: 'should be equal to constant'
  },
  {
    keyword: 'errorMessage',
    dataPath: '/properties',
    schemaPath: '#/allOf/1/allOf/11/allOf/1/then/properties/properties/errorMessage',
    params: {
      errors: [
        {
          keyword: 'contains',
          dataPath: '/properties',
          schemaPath: '#/allOf/1/allOf/11/allOf/1/then/properties/properties/oneOf/0/contains',
          params: {
            minContains: 1
          },
          message: 'should contain at least 1 valid item(s)',
          emUsed: true
        },
        {
          keyword: 'contains',
          dataPath: '/properties',
          schemaPath: '#/allOf/1/allOf/11/allOf/1/then/properties/properties/oneOf/1/contains',
          params: {
            minContains: 1
          },
          message: 'should contain at least 1 valid item(s)',
          emUsed: true
        },
        {
          keyword: 'contains',
          dataPath: '/properties',
          schemaPath: '#/allOf/1/allOf/11/allOf/1/then/properties/properties/oneOf/2/contains',
          params: {
            minContains: 1
          },
          message: 'should contain at least 1 valid item(s)',
          emUsed: true
        },
        {
          keyword: 'oneOf',
          dataPath: '/properties',
          schemaPath: '#/allOf/1/allOf/11/allOf/1/then/properties/properties/oneOf',
          params: {
            passingSchemas: null
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
