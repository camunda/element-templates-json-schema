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
      'type': 'String',
      'feel': 'required',
      'value': '={"currentWeek": week of year(today()), "people": participants, "index": modulo(currentWeek, count(people)), "selectedPerson": people[index + 1]}.selectedPerson',
      'binding': {
        'type': 'zeebe:script',
        'property': 'expression'
      }
    },
    {
      'type': 'String',
      'feel': 'optional',
      'value': 'aResultVariable',
      'binding': {
        'type': 'zeebe:script',
        'property': 'resultVariable'
      }
    }
  ]
};

export const errors = [
  {
    'keyword': 'errorMessage',
    'dataPath': '/properties/1',
    'schemaPath': '#/allOf/1/items/allOf/17/then/errorMessage',
    'params': {
      'errors': [
        {
          'keyword': 'not',
          'dataPath': '/properties/1',
          'schemaPath': '#/allOf/1/items/allOf/17/then/not',
          'params': {},
          'message': 'should NOT be valid',
          'emUsed': true
        }
      ]
    },
    'message': 'Property "resultVariable" cannot be a Feel expression'
  },
  {
    'keyword': 'if',
    'dataPath': '/properties/1',
    'schemaPath': '#/allOf/1/items/allOf/17/if',
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