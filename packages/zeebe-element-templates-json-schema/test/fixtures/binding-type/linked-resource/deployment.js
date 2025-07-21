export const template = {
  '$schema': 'https://unpkg.com/@camunda/zeebe-element-templates-json-schema/resources/schema.json',
  'name': 'Form Definition with FormId',
  'id': 'formDefinitionWithFormId',
  'appliesTo': [
    'bpmn:Task'
  ],
  'elementType': {
    'value': 'bpmn:ServiceTask'
  },
  'properties': [
    {
      'type': 'Hidden',
      'value': 'deployment',
      'binding': {
        'type': 'zeebe:linkedResource',
        'linkName': 'persistedLink',
        'property': 'bindingType'
      }
    }
  ]
};

export const errors = null;
