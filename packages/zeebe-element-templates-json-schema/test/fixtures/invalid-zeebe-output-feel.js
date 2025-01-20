export const template = {
  'name': 'InvalidZeebeOutputFEEL',
  'id': 'com.camunda.example.InvalidZeebeOutputFEEL',
  'appliesTo': [
    'bpmn:Task'
  ],
  'properties': [
    {
      'label': 'booleanValid',
      'type': 'Boolean',
      'binding': {
        'type': 'zeebe:output',
        'source': 'booleanValid'
      },
      'feel': 'static'
    },
    {
      'label': 'numberValid',
      'type': 'Number',
      'binding': {
        'type': 'zeebe:output',
        'source': 'numberValid'
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
    'dataPath': '/properties/2',
    'keyword': 'required',
    'message': 'should have required property \'feel\'',
    'params': {
      'missingProperty': 'feel'
    },
    'schemaPath': '#/allOf/1/items/allOf/11/allOf/0/then/required'
  },
  {
    'dataPath': '/properties/2',
    'keyword': 'if',
    'message': 'should match "then" schema',
    'params': {
      'failingKeyword': 'then'
    },
    'schemaPath': '#/allOf/1/items/allOf/11/allOf/0/if'
  },
  {
    'dataPath': '/properties/3',
    'keyword': 'required',
    'message': 'should have required property \'feel\'',
    'params': {
      'missingProperty': 'feel'
    },
    'schemaPath': '#/allOf/1/items/allOf/11/allOf/0/then/required'
  },
  {
    'dataPath': '/properties/3',
    'keyword': 'if',
    'message': 'should match "then" schema',
    'params': {
      'failingKeyword': 'then'
    },
    'schemaPath': '#/allOf/1/items/allOf/11/allOf/0/if'
  },
  {
    'dataPath': '/properties/4/feel',
    'keyword': 'const',
    'message': 'should be equal to constant',
    'params': {
      'allowedValue': 'static'
    },
    'schemaPath': '#/allOf/1/items/allOf/11/allOf/0/then/properties/feel/const'
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
    'dataPath': '/properties/5/feel',
    'keyword': 'const',
    'message': 'should be equal to constant',
    'params': {
      'allowedValue': 'static'
    },
    'schemaPath': '#/allOf/1/items/allOf/11/allOf/0/then/properties/feel/const'
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
