export const template = {
  '$schema': 'https://unpkg.com/@camunda/zeebe-element-templates-json-schema/resources/schema.json',
  'name': 'Script Task Job Worker',
  'id': 'script-task-job-worker',
  'description': 'A Script Task configured as a job worker',
  'version': 1,
  'engines': {
    'camunda': '^8.6'
  },
  'appliesTo': [
    'bpmn:Task'
  ],
  'elementType': {
    'value': 'bpmn:ScriptTask'
  },
  'properties': [
    {
      'type': 'Hidden',
      'value': 'my-job-worker',
      'binding': {
        'type': 'zeebe:taskDefinition',
        'property': 'type'
      }
    },
    {
      'type': 'Hidden',
      'value': '3',
      'binding': {
        'type': 'zeebe:taskDefinition',
        'property': 'retries'
      }
    }
  ]
};

export const errors = null;