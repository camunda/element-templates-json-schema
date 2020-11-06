export const template = {
  'name': 'InvalidExecutionListenerType',
  'id': 'com.camunda.example.InvalidExecutionListenerType',
  'appliesTo': [
    'bpmn:Task'
  ],
  'properties': [
    {
      'label': 'foo',
      'type': 'Hidden',
      'binding': {
        'type': 'camunda:executionListener'
      }
    },
    {
      'label': 'foo',
      'binding': {
        'type': 'camunda:executionListener'
      }
    },
    {
      'label': 'bar',
      'type': 'String',
      'binding': {
        'type': 'camunda:executionListener'
      }
    }
  ]
};

export const errors = [
  {
    'keyword': 'errorMessage',
    'dataPath': '/properties/2/type',
    'schemaPath': '#/properties/properties/items/allOf/2/then/properties/type/errorMessage',
    'params': {
      'errors': [
        {
          'keyword': 'enum',
          'dataPath': '/properties/2/type',
          'schemaPath': '#/properties/properties/items/allOf/2/then/properties/type/enum',
          'params': {
            'allowedValues': [
              'Hidden'
            ]
          },
          'message': 'should be equal to one of the allowed values'
        }
      ]
    },
    'message': 'invalid property type "String" for binding type "camunda:executionListener"; must be "Hidden"'
  },
  {
    'keyword': 'if',
    'dataPath': '/properties/2',
    'schemaPath': '#/properties/properties/items/allOf/2/if',
    'params': {
      'failingKeyword': 'then'
    },
    'message': 'should match "then" schema'
  }
];