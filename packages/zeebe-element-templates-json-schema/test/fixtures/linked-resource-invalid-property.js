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
      'binding': {
        'type': 'zeebe:linkedResource',
        'linkName': 'myLink',
        'property': 'invalidProperty'
      }
    }
  ]
};

export const errors = [
  {
    'dataPath': '/properties/0/binding/property',
    'keyword': 'errorMessage',
    'message': 'invalid binding.property "invalidProperty"; must be any of { resourceId, resourceType, bindingType, versionTag }',
    'params': {
      'errors': [
        {
          'dataPath': '/properties/0/binding/property',
          'emUsed': true,
          'keyword': 'enum',
          'message': 'should be equal to one of the allowed values',
          'params': {
            'allowedValues': [
              'resourceId',
              'resourceType',
              'bindingType',
              'versionTag'
            ],
          },
          'schemaPath': '#/allOf/1/items/allOf/10/then/properties/binding/properties/property/enum'
        },
      ],
    },
    'schemaPath': '#/allOf/1/items/allOf/10/then/properties/binding/properties/property/errorMessage'
  },
  {
    'dataPath': '/properties/0',
    'keyword': 'if',
    'message': 'should match "then" schema',
    'params': {
      'failingKeyword': 'then',
    },
    'schemaPath': '#/allOf/1/items/allOf/10/if',
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