export const template = {
  name: 'Tooltip',
  id: 'example.com.tooltip',
  appliesTo: [
    'bpmn:ServiceTask'
  ],
  properties: [
    {
      label: 'Input with tooltip',
      type: 'String',
      binding: {
        type: 'property',
        name: 'prop'
      },
      tooltip: 'This field has a tooltip'
    }
  ]
};

export const errors = null;