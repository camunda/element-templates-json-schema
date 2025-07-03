export const template = [ {
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
      'type': 'Hidden',
      'value': '2019-10-01T12:00:00Z',
      'binding': {
        'type': 'zeebe:taskSchedule',
        'property': 'dueDate'
      }
    },
    {
      'type': 'Hidden',
      'value': '2019-10-02T08:09:40+02:00',
      'binding': {
        'type': 'zeebe:taskSchedule',
        'property': 'followUpDate'
      }
    }
  ]
},
{
  'name': 'task schedule',
  'id': 'task-schedule-2',
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
      'type': 'Hidden',
      'value': '2019-10-02T08:09:40+02:00[Europe/Berlin]',
      'binding': {
        'type': 'zeebe:taskSchedule',
        'property': 'followUpDate'
      }
    }
  ]
},
{
  'name': 'task schedule',
  'id': 'task-schedule-3',
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
      'type': 'Hidden',
      'value': '2019-10-01T12:00:00Z',
      'binding': {
        'type': 'zeebe:taskSchedule',
        'property': 'dueDate'
      }
    }
  ]
}
];

export const errors = null;