
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
      'type': 'Hidden',
      'binding': {
        'type': 'zeebe:userTask',
      }
    },
    {
      'type': 'String',
      'feel': 'optional',
      'binding': {
        'type': 'zeebe:taskSchedule',
      }
    }
  ]
};

export const errors = [ {} ];