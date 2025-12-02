export const template = {
  name: 'TimerMissingEventDefinition',
  id: 'com.camunda.example.TimerMissingEventDefinition',
  appliesTo: [
    'bpmn:StartEvent'
  ],
  elementType: {
    value: 'bpmn:StartEvent'
  },
  properties: [
    {
      label: 'Cron',
      type: 'String',
      value: '0 0 9 * * *',
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
