export const template = {
  'name': 'InvalidZeebeInputFEEL',
  'id': 'com.camunda.example.InvalidZeebeInputFEEL',
  'appliesTo': [
    'bpmn:Task'
  ],
  'properties': [
    {
      'label': 'booleanValidOptional',
      'type': 'Boolean',
      'binding': {
        'type': 'zeebe:input',
        'name': 'booleanValidOptional'
      },
      'feel': 'optional'
    },
    {
      'label': 'numberValidOptional',
      'type': 'Number',
      'binding': {
        'type': 'zeebe:input',
        'name': 'numberValidOptional'
      },
      'feel': 'optional'
    },
    {
      'label': 'booleanValidStatic',
      'type': 'Boolean',
      'binding': {
        'type': 'zeebe:input',
        'name': 'booleanValidStatic'
      },
      'feel': 'static'
    },
    {
      'label': 'numberValidStatic',
      'type': 'Number',
      'binding': {
        'type': 'zeebe:input',
        'name': 'numberValidStatic'
      },
      'feel': 'static'
    },
    {
      'label': 'booleanValid',
      'type': 'Boolean',
      'binding': {
        'type': 'zeebe:input',
        'name': 'booleanValid'
      }
    },
    {
      'label': 'numberValid',
      'type': 'Number',
      'binding': {
        'type': 'zeebe:input',
        'name': 'numberValid'
      }
    },
    {
      'label': 'booleanValidFeel',
      'type': 'Boolean',
      'binding': {
        'type': 'zeebe:input',
        'name': 'booleanValidFeel'
      },
      'feel': 'required'
    },
    {
      'label': 'numberValidFeel',
      'type': 'Number',
      'binding': {
        'type': 'zeebe:input',
        'name': 'numberValidFeel'
      },
      'feel': 'required'
    }
  ]
};

export const errors = null;
