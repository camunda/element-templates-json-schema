export const template = {
  'name': 'InvalidElementType',
  'id': 'com.camunda.example.InvalidElementType',
  'appliesTo': [
    'bpmn:Task'
  ],
  'elementType': {
    value: 'bpmn:SendTask'
  },
  'properties': [
    {
      'label': 'foo',
      'type': 'String',
      'binding': {
        'type': 'bpmn:Message#zeebe:subscription#property',
        'name': 'correlationKey'
      }
    }
  ]
};

export const errors = [
  {
    dataPath: '/elementType/value',
    keyword: 'enum',
    schemaPath: '#/allOf/1/allOf/1/then/properties/elementType/properties/value/enum',
    params: {
      'allowedValues': [
        'bpmn:ReceiveTask',
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
    schemaPath: '#/allOf/1/allOf/1/if',
    params: {
      'failingKeyword': 'then'
    },
    message: 'should match "then" schema'
  },
  {
    dataPath: '',
    keyword: 'type',
    message: 'should be array',
    params: {
      type: 'array',
    },
    schemaPath: '#/oneOf/1/type',
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
