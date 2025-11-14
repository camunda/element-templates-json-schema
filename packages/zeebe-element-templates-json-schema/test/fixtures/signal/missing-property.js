export const template = {
  name: 'MissingSignalProperty',
  id: 'com.camunda.example.MissingSignalProperty',
  appliesTo: [
    'bpmn:IntermediateCatchEvent'
  ],
  elementType: {
    value: 'bpmn:IntermediateCatchEvent',
    eventDefinition: 'bpmn:SignalEventDefinition'
  },
  properties: [
    {
      label: 'Some Input',
      type: 'String',
      binding: {
        type: 'zeebe:input',
        name: 'someInput'
      }
    }
  ]
};

export const errors = [
  {
    keyword: 'errorMessage',
    dataPath: '/properties',
    schemaPath: '#/allOf/1/allOf/10/allOf/1/then/properties/properties/errorMessage',
    params: {
      errors: [
        {
          keyword: 'const',
          dataPath: '/properties/0/binding/type',
          schemaPath: '#/allOf/1/allOf/10/allOf/1/then/properties/properties/contains/properties/binding/properties/type/const',
          params: {
            allowedValue: 'bpmn:Signal#property'
          },
          message: 'should be equal to constant',
          emUsed: true
        },
        {
          keyword: 'contains',
          dataPath: '/properties',
          schemaPath: '#/allOf/1/allOf/10/allOf/1/then/properties/properties/contains',
          params: {
            minContains: 1
          },
          message: 'should contain at least 1 valid item(s)',
          emUsed: true
        }
      ]
    },
    message: 'Binding with `type`=`bpmn:Signal#property` is required, when using `elementType.eventDefinition`=`bpmn:SignalEventDefinition`'
  },
  {
    keyword: 'if',
    dataPath: '',
    schemaPath: '#/allOf/1/allOf/10/allOf/1/if',
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
