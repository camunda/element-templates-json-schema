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
      'label': 'Variable Names',
      'type': 'Number',
      'binding': {
        'type': 'bpmn:ConditionalEventDefinition#zeebe:conditionalFilter#property',
        'name': 'variableNames'
      }
    },
    {
      'label': 'Variable Events',
      'type': 'Boolean',
      'binding': {
        'type': 'bpmn:ConditionalEventDefinition#zeebe:conditionalFilter#property',
        'name': 'variableEvents'
      }
    }
  ]
};

export const errors = [
  {
    keyword: 'enum',
    dataPath: '/properties/0/type',
    schemaPath: '#/allOf/1/items/allOf/28/allOf/1/then/properties/type/enum',
    params: {
      allowedValues: [
        'Hidden',
        'String',
        'Text'
      ]
    },
    message: 'should be equal to one of the allowed values'
  },
  {
    keyword: 'if',
    dataPath: '/properties/0',
    schemaPath: '#/allOf/1/items/allOf/28/allOf/1/if',
    params: {
      failingKeyword: 'then'
    },
    message: 'should match "then" schema'
  },
  {
    keyword: 'enum',
    dataPath: '/properties/1/type',
    schemaPath: '#/allOf/1/items/allOf/28/allOf/1/then/properties/type/enum',
    params: {
      allowedValues: [
        'Hidden',
        'String',
        'Text'
      ]
    },
    message: 'should be equal to one of the allowed values'
  },
  {
    keyword: 'if',
    dataPath: '/properties/1',
    schemaPath: '#/allOf/1/items/allOf/28/allOf/1/if',
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
