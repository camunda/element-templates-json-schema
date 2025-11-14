export const template = [
  {
    name: 'ValidSignalWithFeelRequired',
    id: 'com.camunda.example.ValidSignalWithFeelRequired',
    appliesTo: [
      'bpmn:IntermediateCatchEvent'
    ],
    elementType: {
      value: 'bpmn:IntermediateCatchEvent',
      eventDefinition: 'bpmn:SignalEventDefinition'
    },
    properties: [
      {
        label: 'Signal Name',
        type: 'String',
        feel: 'required',
        binding: {
          type: 'bpmn:Signal#property',
          name: 'name'
        }
      }
    ]
  },
  {
    name: 'ValidSignalWithFeelOptional',
    id: 'com.camunda.example.ValidSignalWithFeelOptional',
    appliesTo: [
      'bpmn:IntermediateThrowEvent'
    ],
    elementType: {
      value: 'bpmn:IntermediateThrowEvent',
      eventDefinition: 'bpmn:SignalEventDefinition'
    },
    properties: [
      {
        label: 'Signal Name',
        type: 'String',
        feel: 'optional',
        binding: {
          type: 'bpmn:Signal#property',
          name: 'name'
        }
      }
    ]
  }
];

export const errors = null;
