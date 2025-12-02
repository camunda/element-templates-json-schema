export const template = [
  {
    name: 'ValidTimerStartCycle',
    id: 'com.camunda.example.ValidTimerStartCycle',
    appliesTo: [
      'bpmn:StartEvent'
    ],
    elementType: {
      value: 'bpmn:StartEvent',
      eventDefinition: 'bpmn:TimerEventDefinition'
    },
    properties: [
      {
        label: 'Trigger cadence',
        type: 'String',
        value: 'R5/PT5M',
        binding: {
          type: 'bpmn:TimerEventDefinition#property',
          name: 'timeCycle'
        }
      }
    ]
  },
  {
    name: 'ValidTimerBoundaryDuration',
    id: 'com.camunda.example.ValidTimerBoundaryDuration',
    appliesTo: [
      'bpmn:BoundaryEvent'
    ],
    elementType: {
      value: 'bpmn:BoundaryEvent',
      eventDefinition: 'bpmn:TimerEventDefinition'
    },
    properties: [
      {
        label: 'Reminder Duration',
        type: 'Hidden',
        value: 'PT10M',
        binding: {
          type: 'bpmn:TimerEventDefinition#property',
          name: 'timeDuration'
        }
      }
    ]
  },
  {
    name: 'ValidTimerIntermediateDate',
    id: 'com.camunda.example.ValidTimerIntermediateDate',
    appliesTo: [
      'bpmn:IntermediateCatchEvent'
    ],
    elementType: {
      value: 'bpmn:IntermediateCatchEvent',
      eventDefinition: 'bpmn:TimerEventDefinition'
    },
    properties: [
      {
        label: 'Specific Date',
        type: 'String',
        value: '2025-12-24T10:00:00Z',
        binding: {
          type: 'bpmn:TimerEventDefinition#property',
          name: 'timeDate'
        }
      }
    ]
  },
  {
    name: 'ValidTimerBoundaryCycleCron',
    id: 'com.camunda.example.ValidTimerBoundaryCycleCron',
    appliesTo: [
      'bpmn:BoundaryEvent'
    ],
    elementType: {
      value: 'bpmn:BoundaryEvent',
      eventDefinition: 'bpmn:TimerEventDefinition'
    },
    properties: [
      {
        label: 'Cron Cadence',
        type: 'String',
        value: '0 0/5 * * * *',
        binding: {
          type: 'bpmn:TimerEventDefinition#property',
          name: 'timeCycle'
        }
      }
    ]
  }
];

export const errors = null;
