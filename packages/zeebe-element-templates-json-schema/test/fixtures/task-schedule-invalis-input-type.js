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
      'type': 'Number',
      'binding': {
        'type': 'zeebe:taskSchedule',
        'property': 'dueDate'
      }
    },
    {
      'type': 'Number',
      'binding': {
        'type': 'zeebe:taskSchedule',
        'property': 'followUpDate'
      }
    },
    {
      'type': 'Boolean',
      'binding': {
        'type': 'zeebe:taskSchedule',
        'property': 'dueDate'
      }
    }
    ,
    {
      'type': 'Boolean',
      'binding': {
        'type': 'zeebe:taskSchedule',
        'property': 'followUpDate'
      }
    }
  ]
};

export const errors = [ {} ];