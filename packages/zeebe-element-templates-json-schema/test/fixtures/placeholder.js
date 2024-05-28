export const template = {
  name: 'Tooltip',
  id: 'example.com.tooltip',
  appliesTo: [
    'bpmn:ServiceTask'
  ],
  properties: [
    {
      label: 'Input with placeholder',
      type: 'String',
      binding: {
        type: 'property',
        name: 'prop'
      },
      placeholder: 'This field has a placeholder'
    },
    {
      label: 'Input with placeholder',
      type: 'Text',
      binding: {
        type: 'property',
        name: 'prop'
      },
      placeholder: 'This field has a placeholder'
    },
    {
      label: 'Input with placeholder',
      binding: {
        type: 'property',
        name: 'prop'
      },
      placeholder: 'This field has a placeholder'
    }
  ]
};

export const errors = null;