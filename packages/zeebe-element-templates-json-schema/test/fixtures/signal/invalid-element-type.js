export const template = {
  name: 'InvalidElementType',
  id: 'com.camunda.example.InvalidElementType',
  appliesTo: [
    'bpmn:Task'
  ],
  elementType: {
    value: 'bpmn:ServiceTask'
  },
  properties: [
    {
      label: 'Signal Name',
      type: 'String',
      binding: {
        type: 'bpmn:Signal#property',
        name: 'name'
      }
    }
  ]
};

export const errors = [
  {
    keyword: 'required',
    dataPath: '/elementType',
    schemaPath: '#/allOf/1/allOf/10/allOf/0/then/properties/elementType/required',
    params: {
      missingProperty: 'eventDefinition'
    },
    message: 'should have required property \'eventDefinition\''
  },
  {
    keyword: 'enum',
    dataPath: '/elementType/value',
    schemaPath: '#/allOf/1/allOf/10/allOf/0/then/properties/elementType/properties/value/enum',
    params: {
      allowedValues: [
        'bpmn:StartEvent',
        'bpmn:IntermediateCatchEvent',
        'bpmn:IntermediateThrowEvent',
        'bpmn:BoundaryEvent',
        'bpmn:EndEvent'
      ]
    },
    message: 'should be equal to one of the allowed values'
  },
  {
    keyword: 'if',
    dataPath: '',
    schemaPath: '#/allOf/1/allOf/10/allOf/0/if',
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
