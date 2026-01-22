export const template = {
  '$schema': 'https://unpkg.com/@camunda/zeebe-element-templates-json-schema/resources/schema.json',
  'id': 'io.camunda.examples.conditional',
  'name': 'Conditional Event',
  'appliesTo': [
    'bpmn:Event'
  ],
  'elementType': {
    'value': 'bpmn:IntermediateCatchEvent',
    'eventDefinition': 'bpmn:ConditionalEventDefinition'
  },
  'properties': [
    {
      'label': 'Condition',
      'type': 'String',
      'feel': 'optional',
      'binding': {
        'type': 'bpmn:ConditionalEventDefinition#property',
        'name': 'condition'
      }
    }
  ]
};

export const errors = [
  {
    keyword: 'const',
    dataPath: '/properties/0/feel',
    schemaPath: '#/allOf/1/items/allOf/28/allOf/0/then/allOf/1/properties/feel/const',
    params: {
      allowedValue: 'required'
    },
    message: 'should be equal to constant'
  },
  {
    keyword: 'if',
    dataPath: '/properties/0',
    schemaPath: '#/allOf/1/items/allOf/28/allOf/0/if',
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
