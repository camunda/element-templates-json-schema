export const template = {
  'name': 'Binding Type Template (invalid value)',
  'id': 'com.example.BindingTemplate-invalid-value',
  'appliesTo': [
    'bpmn:Task'
  ],
  'elementType': {
    'value': 'bpmn:Task',
    'eventDefinition': 'bpmn:MessageEventDefinition'
  },
  'properties': [],
};

export const errors = [
  {
    'dataPath': '/elementType/value',
    'keyword': 'enum',
    'message': 'should be equal to one of the allowed values',
    'params': {
      'allowedValues': [
        'bpmn:StartEvent',
        'bpmn:IntermediateCatchEvent',
        'bpmn:IntermediateThrowEvent',
        'bpmn:BoundaryEvent',
        'bpmn:EndEvent',
      ],
    },
    'schemaPath': '#/properties/elementType/allOf/0/allOf/1/then/properties/value/enum',
  },
  {
    'dataPath': '/elementType',
    'keyword': 'if',
    'message': 'should match "then" schema',
    'params': {
      'failingKeyword': 'then',
    },
    'schemaPath': '#/properties/elementType/allOf/0/allOf/1/if',
  },
  {
    'dataPath': '',
    'keyword': 'type',
    'message': 'should be array',
    'params': {
      'type': 'array',
    },
    'schemaPath': '#/oneOf/1/type',
  },
  {
    'dataPath': '',
    'keyword': 'oneOf',
    'message': 'should match exactly one schema in oneOf',
    'params': {
      'passingSchemas': null,
    },
    'schemaPath': '#/oneOf',
  }
];