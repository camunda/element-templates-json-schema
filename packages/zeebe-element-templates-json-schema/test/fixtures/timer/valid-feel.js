export const template = [
  {
    name: 'ValidTimerDateFeel',
    id: 'com.camunda.example.ValidTimerDateFeel',
    appliesTo: [
      'bpmn:IntermediateCatchEvent'
    ],
    elementType: {
      value: 'bpmn:IntermediateCatchEvent',
      eventDefinition: 'bpmn:TimerEventDefinition'
    },
    properties: [
      {
        label: 'Date Expression',
        type: 'Text',
        feel: 'required',
        value: '=now()+duration("P1D")',
        binding: {
          type: 'bpmn:TimerEventDefinition#property',
          name: 'timeDate'
        }
      }
    ]
  },
  {
    name: 'ValidTimerCycleFeel',
    id: 'com.camunda.example.ValidTimerCycleFeel',
    appliesTo: [
      'bpmn:BoundaryEvent'
    ],
    elementType: {
      value: 'bpmn:BoundaryEvent',
      eventDefinition: 'bpmn:TimerEventDefinition'
    },
    properties: [
      {
        label: 'Cycle Expression',
        type: 'String',
        feel: 'optional',
        value: '=cycleExpression',
        binding: {
          type: 'bpmn:TimerEventDefinition#property',
          name: 'timeCycle'
        }
      }
    ]
  },
  {
    name: 'ValidTimerDurationFeel',
    id: 'com.camunda.example.ValidTimerDurationFeel',
    appliesTo: [
      'bpmn:BoundaryEvent'
    ],
    elementType: {
      value: 'bpmn:BoundaryEvent',
      eventDefinition: 'bpmn:TimerEventDefinition'
    },
    properties: [
      {
        label: 'Duration Expression',
        type: 'String',
        feel: 'required',
        value: '=duration("PT5M")',
        binding: {
          type: 'bpmn:TimerEventDefinition#property',
          name: 'timeDuration'
        }
      }
    ]
  }
];

export const errors = null;
