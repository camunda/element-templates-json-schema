export const template = {
  name: 'InvalidPropertyName',
  id: 'com.camunda.example.InvalidPropertyName',
  appliesTo: [
    'bpmn:IntermediateCatchEvent'
  ],
  elementType: {
    value: 'bpmn:IntermediateCatchEvent',
    eventDefinition: 'bpmn:SignalEventDefinition'
  },
  properties: [
    {
      label: 'Signal Name',
      type: 'String',
      binding: {
        type: 'bpmn:Signal#property',
        name: 'youShallNotPass'
      }
    }
  ]
};

export const errors = [
  {
    keyword: 'const',
    dataPath: '/properties/0/binding/name',
    schemaPath: '#/allOf/1/items/properties/binding/allOf/13/then/properties/name/const',
    params: {
      allowedValue: 'name'
    },
    message: 'should be equal to constant'
  },
  {
    keyword: 'if',
    dataPath: '/properties/0/binding',
    schemaPath: '#/allOf/1/items/properties/binding/allOf/13/if',
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
