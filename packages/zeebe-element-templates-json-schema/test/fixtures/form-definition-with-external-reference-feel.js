export const template = {
  '$schema': 'https://unpkg.com/@camunda/zeebe-element-templates-json-schema/resources/schema.json',
  'name': 'Form Definition with external reference',
  'id': 'formDefinitionWithExternalReference',
  'appliesTo': [
    'bpmn:Task'
  ],
  'elementType': {
    'value': 'bpmn:UserTask'
  },
  'properties': [
    {
      'type': 'Hidden',
      'binding': {
        'type': 'zeebe:userTask',
      }
    },
    {
      'type': 'String',
      'value': '= aFeelExpression',
      'feel': 'optional',
      'binding': {
        'type': 'zeebe:formDefinition',
        'property': 'externalReference'
      }
    }
  ]
};

export const errors = null;