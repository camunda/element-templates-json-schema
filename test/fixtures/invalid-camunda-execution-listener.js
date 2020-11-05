export const template = {
  'name': 'InvalidExecutionListener',
  'id': 'com.camunda.example.InvalidExecutionListener',
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
    'dataPath': '/properties/1/type',
    'schemaPath': '#/properties/properties/items/allOf/1/then/properties/type/errorMessage',
    'params': {
      'errors': [
        {
          'keyword': 'enum',
          'dataPath': '/properties/1/type',
          'schemaPath': '#/properties/properties/items/allOf/1/then/properties/type/enum',
          'params': {
            'allowedValues': [
              null,
              'Hidden'
            ]
          },
          'message': 'should be equal to one of the allowed values'
        }
      ]
    },
    'message': 'invalid property type "String" for "camunda:executionListener"; must be "Hidden"'
  },
  {
    'keyword': 'if',
    'dataPath': '/properties/1',
    'schemaPath': '#/properties/properties/items/allOf/1/if',
    'params': {
      'failingKeyword': 'then'
    },
    'message': 'should match "then" schema'
  }
];