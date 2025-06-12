export const template = {
  '$schema': 'https://unpkg.com/@camunda/zeebe-element-templates-json-schema/resources/schema.json',
  'name': 'Reusable Rule Template',
  'id': 'sometemplate',
  'description': 'some description',
  'version': 1,
  'engines': {
    'camunda': '^8.6'
  },
  'appliesTo': [
    'bpmn:Task'
  ],
  'elementType': {
    'value': 'bpmn:ScriptTask'
  },
  'properties': [
    {
      'type': 'Hidden',
      'value': '={"currentWeek": week of year(today()), "people": participants, "index": modulo(currentWeek, count(people)), "selectedPerson": people[index + 1]}.selectedPerson',
      'binding': {
        'type': 'zeebe:script',
        'property': 'expression'
      }
    },
    {
      'type': 'Hidden',
      'value': 'aResultVariable',
      'binding': {
        'type': 'zeebe:script',
        'property': 'resultVariable'
      }
    },
    {
      'type': 'Hidden',
      'value': 'scriptJob',
      'binding': {
        'type': 'zeebe:taskDefinition',
        'property': 'type'
      }
    }
  ]
};

export const errors = [
  {
    'keyword': 'not',
    'dataPath': '',
    'schemaPath': '#/allOf/1/allOf/5/then/not',
    'params': {},
    'message': 'should NOT be valid'
  },
  {
    'keyword': 'if',
    'dataPath': '',
    'schemaPath': '#/allOf/1/allOf/5/if',
    'params': {
      'failingKeyword': 'then'
    },
    'message': 'should match "then" schema'
  },
  {
    'keyword': 'type',
    'dataPath': '',
    'schemaPath': '#/oneOf/1/type',
    'params': {
      'type': 'array'
    },
    'message': 'should be array'
  },
  {
    'keyword': 'oneOf',
    'dataPath': '',
    'schemaPath': '#/oneOf',
    'params': {
      'passingSchemas': null
    },
    'message': 'should match exactly one schema in oneOf'
  }
];
