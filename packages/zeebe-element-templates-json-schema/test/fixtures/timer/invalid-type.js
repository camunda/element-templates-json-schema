export const template = {
  name: 'TimerInvalidPropertyType',
  id: 'com.camunda.example.TimerInvalidPropertyType',
  appliesTo: [
    'bpmn:StartEvent'
  ],
  elementType: {
    value: 'bpmn:StartEvent',
    eventDefinition: 'bpmn:TimerEventDefinition'
  },
  properties: [
    {
      label: 'Duration',
      type: 'Boolean',
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
    dataPath: '/properties/0/type',
    schemaPath: '#/allOf/1/items/allOf/27/then/properties/type/enum',
    params: {
      allowedValues: [
        'Hidden',
        'String',
        'Text'
      ]
    },
    message: 'should be equal to one of the allowed values'
  },
  {
    keyword: 'if',
    dataPath: '/properties/0',
    schemaPath: '#/allOf/1/items/allOf/27/if',
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
