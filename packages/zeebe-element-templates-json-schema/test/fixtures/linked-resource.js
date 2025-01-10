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
        'linkName': 'persistedLink',
        'property': 'resourceType'
      }
    },
    {
      'type': 'String',
      'feel': 'optional',
      'binding': {
        'type': 'zeebe:linkedResource',
        'linkName': 'persistedLink',
        'property': 'resourceId'
      }
    },
    {
      'type': 'String',
      'value': 'versionTag',
      'binding': {
        'type': 'zeebe:linkedResource',
        'linkName': 'persistedLink',
        'property': 'bindingType'
      }
    },
    {
      'type': 'String',
      'value': 'v123',
      'binding': {
        'type': 'zeebe:linkedResource',
        'linkName': 'persistedLink',
        'property': 'versionTag'
      }
    },
    {
      'type': 'String',
      'value': 'RPA',
      'binding': {
        'type': 'zeebe:linkedResource',
        'linkName': 'removedLink',
        'property': 'resourceType'
      }
    }
  ]
};

export const errors = null;