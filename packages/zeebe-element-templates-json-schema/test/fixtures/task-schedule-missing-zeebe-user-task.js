
export const template = {
  'name': 'task schedule',
  'id': 'task-schedule-1',
  'appliesTo': [
    'bpmn:Task'
  ],
  'elementType': {
    'value': 'bpmn:UserTask'
  },
  'properties': [
    {
      'type': 'String',
      'binding': {
        'type': 'zeebe:taskSchedule',
        'property': 'dueDate'
      }
    },
    {
      'type': 'String',
      'binding': {
        'type': 'zeebe:taskSchedule',
        'property': 'followUpDate'
      }
    }
  ]
};

export const errors = [ {} ];