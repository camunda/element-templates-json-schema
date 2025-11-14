export const template = {
  name: 'MissingBindingName',
  id: 'com.camunda.example.MissingBindingName',
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
        type: 'bpmn:Signal#property'
      }
    }
  ]
};

export const errors = [
  {
    keyword: 'errorMessage',
    dataPath: '/properties/0/binding',
    schemaPath: '#/allOf/1/items/properties/binding/allOf/0/then/errorMessage',
    params: {
      errors: [
        {
          keyword: 'required',
          emUsed: true,
          dataPath: '/properties/0/binding',
          schemaPath: '#/allOf/1/items/properties/binding/allOf/0/then/required',
          params: {
            missingProperty: 'name'
          },
          message: 'should have required property \'name\''
        }
      ]
    },
    message: 'property.binding "bpmn:Signal#property" requires name'
  },
  {
    keyword: 'if',
    dataPath: '/properties/0/binding',
    schemaPath: '#/allOf/1/items/properties/binding/allOf/0/if',
    params: {
      failingKeyword: 'then'
    },
    message: 'should match "then" schema'
  },
  {
    keyword: 'required',
    dataPath: '/properties/0/binding',
    schemaPath: '#/allOf/1/items/properties/binding/allOf/13/then/required',
    params: {
      missingProperty: 'name'
    },
    message: 'should have required property \'name\''
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
