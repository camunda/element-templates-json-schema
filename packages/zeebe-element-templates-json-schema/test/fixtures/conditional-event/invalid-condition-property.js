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
      'feel': 'required',
      'binding': {
        'type': 'bpmn:ConditionalEventDefinition#property',
        'name': 'nonexisting'
      }
    }
  ]
};

export const errors = [
  {
    keyword: 'const',
    dataPath: '/properties/0/binding/name',
    schemaPath: '#/allOf/1/items/properties/binding/allOf/15/allOf/0/then/properties/name/const',
    params: {
      allowedValue: 'condition'
    },
    message: 'should be equal to constant'
  },
  {
    keyword: 'if',
    dataPath: '/properties/0/binding',
    schemaPath: '#/allOf/1/items/properties/binding/allOf/15/allOf/0/if',
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
