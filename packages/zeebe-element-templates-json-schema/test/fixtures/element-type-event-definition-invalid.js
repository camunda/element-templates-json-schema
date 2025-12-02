export const template = {
  'name': 'Binding Type Template (invalid value)',
  'id': 'com.example.BindingTemplate-invalid-value',
  'appliesTo': [
    'bpmn:IntermediateCatchEvent'
  ],
  'elementType': {
    'value': 'bpmn:IntermediateCatchEvent',
    'eventDefinition': 'bpmn:NoneEventDefinition'
  },
  'properties': [],
};

export const errors = [
  {
    'dataPath': '/elementType/eventDefinition',
    'keyword': 'enum',
    'message': 'should be equal to one of the allowed values',
    'params': {
      'allowedValues': [
        'bpmn:MessageEventDefinition',
        'bpmn:SignalEventDefinition',
        'bpmn:TimerEventDefinition'
      ]
    },
    'schemaPath': '#/properties/elementType/allOf/0/allOf/0/properties/eventDefinition/enum'
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