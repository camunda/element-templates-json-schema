export const template = {
  '$schema': 'https://unpkg.com/@camunda/zeebe-element-templates-json-schema/resources/schema.json',
  'id': 'io.camunda.examples.conditional',
  'name': 'Conditional Event',
  'appliesTo': [
    'bpmn:Event'
  ],
  'elementType': {
    'value': 'bpmn:IntermediateThrowEvent',
    'eventDefinition': 'bpmn:ConditionalEventDefinition'
  },
  'properties': []
};

export const errors = [
  {
    keyword: 'enum',
    dataPath: '/elementType/value',
    schemaPath: '#/properties/elementType/allOf/0/allOf/3/then/properties/value/enum',
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
    keyword: 'if',
    dataPath: '/elementType',
    schemaPath: '#/properties/elementType/allOf/0/allOf/3/if',
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
