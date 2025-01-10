export const template = {
  '$schema': 'https://unpkg.com/@camunda/zeebe-element-templates-json-schema/resources/schema.json',
  'name': 'linkedResource',
  'id': 'linkedResource',
  'version': 1,
  'appliesTo': [
    'bpmn:Task'
  ],
  'elementType': {
    'value': 'bpmn:ServiceTask'
  },
  'properties': [
    {
      'type': 'String',
      'value': 'RPA',
      'binding': {
        'type': 'zeebe:linkedResource',
        'property': 'resourceType'
      }
    }
  ]
};

export const errors = [
  {
    'dataPath': '/properties/0/binding',
    'keyword': 'required',
    'message': "should have required property 'linkName'",
    'params': {
      'missingProperty': 'linkName',
    },
    'schemaPath': '#/allOf/1/items/allOf/10/then/properties/binding/required'
  },
  {
    'dataPath': '/properties/0',
    'keyword': 'if',
    'message': 'should match "then" schema',
    'params': {
      'failingKeyword': 'then',
    },
    'schemaPath': '#/allOf/1/items/allOf/10/if'
  },
  {
    'dataPath': '',
    'keyword': 'type',
    'message': 'should be array',
    'params': {
      'type': 'array',
    },
    'schemaPath': '#/oneOf/1/type'
  },
  {
    'dataPath': '',
    'keyword': 'oneOf',
    'message': 'should match exactly one schema in oneOf',
    'params': {
      'passingSchemas': null,
    },
    'schemaPath': '#/oneOf'
  }
];