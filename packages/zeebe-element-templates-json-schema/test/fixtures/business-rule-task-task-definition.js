export const template = {
  '$schema': 'https://unpkg.com/@camunda/zeebe-element-templates-json-schema/resources/schema.json',
  'name': 'Reusable Rule Template',
  'id': 'io.camunda.examples.Decision',
  'description': 'A reusable rule template',
  'version': 1,
  'engines': {
    'camunda': '^8.6'
  },
  'appliesTo': [
    'bpmn:Task',
    'bpmn:BusinessRuleTask'
  ],
  'elementType': {
    'value': 'bpmn:BusinessRuleTask'
  },
  'properties': [
    {
      'label': 'foo',
      'type': 'Number',
      'binding': {
        'type': 'zeebe:taskDefinition',
        'property': 'retries'
      }
    },
    {
      'label': 'bar',
      'type': 'String',
      'binding': {
        'type': 'zeebe:taskDefinition',
        'property': 'type'
      }
    },
  ]
};

export const errors = null;
