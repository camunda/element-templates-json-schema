export const template = {
  'name': 'Custom Whatever',
  'id': 'com.mycompany.whateverdomain.ShoeTask',
  'appliesTo': [
    'bpmn:ServiceTask'
  ],
  'properties': [
    {
      'label': 'Schuhgröße',
      'type': 'String',
      'value': '45',
      'binding': {
        'type': 'property',
        'name': 'shoeSize'
      },
      'constraints': {
        'mandatory': true,
        'minLength': 10,
        'maxLength': 20,
        'pattern': {
          'message': 'Must be valid shoe size (>20 && <49)',
          'match': '/[2-4][0-9]/'
        }
      }
    }
  ]
};

export const errors = null;