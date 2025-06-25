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
        'type': 'zeebe:script'
      }
    },
    {
      'type': 'Hidden',
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
    'keyword': 'required',
    'dataPath': '/properties/0/binding',
    'schemaPath': '#/allOf/1/allOf/6/then/allOf/0/properties/properties/contains/properties/binding/required',
    'params': {
      'missingProperty': 'property'
    },
    'message': 'should have required property \'property\''
  },
  {
    'keyword': 'const',
    'dataPath': '/properties/1/binding/property',
    'schemaPath': '#/allOf/1/allOf/6/then/allOf/0/properties/properties/contains/properties/binding/properties/property/const',
    'params': {
      'allowedValue': 'expression'
    },
    'message': 'should be equal to constant'
  },
  {
    'keyword': 'contains',
    'dataPath': '/properties',
    'schemaPath': '#/allOf/1/allOf/6/then/allOf/0/properties/properties/contains',
    'params': {
      'minContains': 1
    },
    'message': 'should contain at least 1 valid item(s)'
  },
  {
    'keyword': 'if',
    'dataPath': '',
    'schemaPath': '#/allOf/1/allOf/6/if',
    'params': {
      'failingKeyword': 'then'
    },
    'message': 'should match "then" schema'
  },
  {
    'keyword': 'required',
    'dataPath': '/properties/0/binding',
    'schemaPath': '#/allOf/1/items/properties/binding/allOf/6/then/required',
    'params': {
      'missingProperty': 'property'
    },
    'message': 'should have required property \'property\''
  },
  {
    'keyword': 'if',
    'dataPath': '/properties/0/binding',
    'schemaPath': '#/allOf/1/items/properties/binding/allOf/6/if',
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
