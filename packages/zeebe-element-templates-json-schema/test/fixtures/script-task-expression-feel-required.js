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
      'type': 'Hidden',
      'value': 'aResultVariable',
      'binding': {
        'type': 'zeebe:script',
        'property': 'resultVariable'
      }
    }
  ]
};

export const errors = null;
