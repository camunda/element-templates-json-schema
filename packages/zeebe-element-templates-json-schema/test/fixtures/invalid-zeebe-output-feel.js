export const template = {
  'name': 'InvalidZeebeOutputFEEL',
  'id': 'com.camunda.example.InvalidZeebeOutputFEEL',
  'appliesTo': [
    'bpmn:Task'
  ],
  'properties': [
    {
      'label': 'booleanValidOptional',
      'type': 'Boolean',
      'binding': {
        'type': 'zeebe:output',
        'source': 'booleanValidOptional'
      },
      'feel': 'optional'
    },
    {
      'label': 'numberValidOptional',
      'type': 'Number',
      'binding': {
        'type': 'zeebe:output',
        'source': 'numberValidOptional'
      },
      'feel': 'optional'
    },
    {
      'label': 'booleanValidStatic',
      'type': 'Boolean',
      'binding': {
        'type': 'zeebe:output',
        'source': 'booleanValidStatic'
      },
      'feel': 'static'
    },
    {
      'label': 'numberValidStatic',
      'type': 'Number',
      'binding': {
        'type': 'zeebe:output',
        'source': 'numberValidStatic'
      },
      'feel': 'static'
    },
    {
      'label': 'booleanInvalid',
      'type': 'Boolean',
      'binding': {
        'type': 'zeebe:output',
        'source': 'booleanInvalid'
      }
    },
    {
      'label': 'numberInvalid',
      'type': 'Number',
      'binding': {
        'type': 'zeebe:output',
        'source': 'numberInvalid'
      }
    },
    {
      'label': 'booleanInvalidFeel',
      'type': 'Boolean',
      'binding': {
        'type': 'zeebe:output',
        'source': 'booleanInvalidFeel'
      },
      'feel': 'required'
    },
    {
      'label': 'numberInvalidFeel',
      'type': 'Number',
      'binding': {
        'type': 'zeebe:output',
        'source': 'numberInvalidFeel'
      },
      'feel': 'required'
    }
  ]
};

export const errors = [
  {
    'dataPath': '/properties/4',
    'keyword': 'required',
    'message': 'should have required property \'feel\'',
    'params': {
      'missingProperty': 'feel'
    },
    'schemaPath': '#/allOf/1/items/allOf/11/allOf/0/then/required'
  },
  {
    'dataPath': '/properties/4',
    'keyword': 'if',
    'message': 'should match "then" schema',
    'params': {
      'failingKeyword': 'then'
    },
    'schemaPath': '#/allOf/1/items/allOf/11/allOf/0/if'
  },
  {
    'dataPath': '/properties/5',
    'keyword': 'required',
    'message': 'should have required property \'feel\'',
    'params': {
      'missingProperty': 'feel'
    },
    'schemaPath': '#/allOf/1/items/allOf/11/allOf/0/then/required'
  },
  {
    'dataPath': '/properties/5',
    'keyword': 'if',
    'message': 'should match "then" schema',
    'params': {
      'failingKeyword': 'then'
    },
    'schemaPath': '#/allOf/1/items/allOf/11/allOf/0/if'
  },
  {
    'dataPath': '/properties/6/feel',
    'keyword': 'enum',
    'message': 'should be equal to one of the allowed values',
    'params': {
      'allowedValues': [
        'optional',
        'static'
      ]
    },
    'schemaPath': '#/allOf/1/items/allOf/11/allOf/0/then/properties/feel/enum'
  },
  {
    'dataPath': '/properties/6',
    'keyword': 'if',
    'message': 'should match "then" schema',
    'params': {
      'failingKeyword': 'then'
    },
    'schemaPath': '#/allOf/1/items/allOf/11/allOf/0/if'
  },
  {
    'dataPath': '/properties/7/feel',
    'keyword': 'enum',
    'message': 'should be equal to one of the allowed values',
    'params': {
      'allowedValues': [
        'optional',
        'static'
      ]
    },
    'schemaPath': '#/allOf/1/items/allOf/11/allOf/0/then/properties/feel/enum'
  },
  {
    'dataPath': '/properties/7',
    'keyword': 'if',
    'message': 'should match "then" schema',
    'params': {
      'failingKeyword': 'then'
    },
    'schemaPath': '#/allOf/1/items/allOf/11/allOf/0/if'
  },
  {
    'dataPath': '',
    'keyword': 'type',
    'message': 'should be array',
    'params': {
      'type': 'array'
    },
    'schemaPath': '#/oneOf/1/type'
  },
  {
    'dataPath': '',
    'keyword': 'oneOf',
    'message': 'should match exactly one schema in oneOf',
    'params': {
      'passingSchemas': null
    },
    'schemaPath': '#/oneOf'
  }
];
