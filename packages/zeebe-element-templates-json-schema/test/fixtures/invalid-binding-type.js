export const template = {
  'name': 'InvalidBindingType',
  'id': 'com.camunda.example.InvalidBindingType',
  'appliesTo': [
    'bpmn:Task'
  ],
  'properties': [
    {
      'label': 'Are you awesome?',
      'type': 'String',
      'binding': {
        'type': 'property',
        'name': 'foo'
      }
    },
    {
      'label': 'Are you awesome?',
      'type': 'String',
      'value': true,
      'binding': {
        'type': 'foo'
      }
    }
  ]
};

export const errors = [
  {
    keyword: 'errorMessage',
    dataPath: '/properties/1/binding/type',
    schemaPath: '#/allOf/1/items/properties/binding/properties/type/errorMessage',
    params: {
      errors: [
        {
          keyword: 'enum',
          dataPath: '/properties/1/binding/type',
          schemaPath: '#/allOf/1/items/properties/binding/properties/type/enum',
          params: {
            allowedValues: [
              'property',
              'zeebe:taskDefinition:type',
              'zeebe:input',
              'zeebe:output',
              'zeebe:property',
              'zeebe:taskHeader',
              'bpmn:Message#property',
              'bpmn:Message#zeebe:subscription#property',
              'zeebe:taskDefinition',
              'zeebe:calledElement',
              'zeebe:linkedResource',
              'zeebe:userTask',
              'zeebe:formDefinition',
              'zeebe:calledDecision',
              'zeebe:script',
              'zeebe:assignmentDefinition',
              'zeebe:priorityDefinition',
              'zeebe:adHoc',
              'zeebe:taskSchedule',
              'bpmn:Signal#property',
              'bpmn:TimerEventDefinition#property'
            ]
          },
          message: 'should be equal to one of the allowed values',
          emUsed: true
        }
      ]
    },
    message: 'invalid property.binding type "foo"; must be any of { property, zeebe:taskDefinition:type, zeebe:input, zeebe:output, zeebe:property, zeebe:taskHeader, bpmn:Message#property, bpmn:Message#zeebe:subscription#property, zeebe:taskDefinition, zeebe:calledElement, zeebe:linkedResource, zeebe:userTask, zeebe:formDefinition, zeebe:calledDecision, zeebe:script, zeebe:assignmentDefinition, zeebe:priorityDefinition, zeebe:adHoc, zeebe:taskSchedule, bpmn:Signal#property, bpmn:TimerEventDefinition#property }'
  },
  {
    keyword: 'type',
    dataPath: '',
    schemaPath: '#/oneOf/1/type',
    params: {
      type: 'array'
    },
    message: 'should be array'
  },
  {
    keyword: 'oneOf',
    dataPath: '',
    schemaPath: '#/oneOf',
    params: {
      passingSchemas: null
    },
    message: 'should match exactly one schema in oneOf'
  }
];
