export const template = [
  {
    name: 'ValidTemplateStartEvent',
    id: 'com.camunda.example.ValidTemplateStartEvent',
    appliesTo: [
      'bpmn:StartEvent'
    ],
    elementType: {
      value: 'bpmn:StartEvent',
      eventDefinition: 'bpmn:SignalEventDefinition'
    },
    properties: [
      {
        label: 'Signal Name',
        type: 'String',
        binding: {
          type: 'bpmn:Signal#property',
          name: 'name'
        }
      }
    ]
  },
  {
    name: 'ValidTemplateIntermediateCatchEvent',
    id: 'com.camunda.example.ValidTemplateIntermediateCatchEvent',
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
        type: 'Hidden',
        value: 'MY_SIGNAL',
        binding: {
          type: 'bpmn:Signal#property',
          name: 'name'
        }
      }
    ]
  },
  {
    name: 'ValidTemplateIntermediateThrowEvent',
    id: 'com.camunda.example.ValidTemplateIntermediateThrowEvent',
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
        binding: {
          type: 'bpmn:Signal#property',
          name: 'name'
        }
      }
    ]
  },
  {
    name: 'ValidTemplateBoundaryEvent',
    id: 'com.camunda.example.ValidTemplateBoundaryEvent',
    appliesTo: [
      'bpmn:BoundaryEvent'
    ],
    elementType: {
      value: 'bpmn:BoundaryEvent',
      eventDefinition: 'bpmn:SignalEventDefinition'
    },
    properties: [
      {
        label: 'Signal Name',
        type: 'String',
        binding: {
          type: 'bpmn:Signal#property',
          name: 'name'
        }
      }
    ]
  },
  {
    name: 'ValidTemplateEndEvent',
    id: 'com.camunda.example.ValidTemplateEndEvent',
    appliesTo: [
      'bpmn:EndEvent'
    ],
    elementType: {
      value: 'bpmn:EndEvent',
      eventDefinition: 'bpmn:SignalEventDefinition'
    },
    properties: [
      {
        label: 'Signal Name',
        type: 'String',
        binding: {
          type: 'bpmn:Signal#property',
          name: 'name'
        }
      }
    ]
  }
];

export const errors = null;
