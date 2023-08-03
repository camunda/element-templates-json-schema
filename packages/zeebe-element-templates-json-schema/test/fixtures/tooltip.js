export const template = {
  name: 'Tooltip',
  id: 'example.com.tooltip',
  appliesTo: [
    'bpmn:ServiceTask'
  ],
  groups: [
    {
      id: 'group',
      label: 'Custom Group',
      tooltip: 'This is a custom group'
    },
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
    },
    {
      label: 'Input in group',
      type: 'String',
      binding: {
        type: 'property',
        name: 'prop2'
      }
    },
  ]
};

export const errors = null;