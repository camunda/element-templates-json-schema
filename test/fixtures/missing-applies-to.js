export const template = {
  'name': 'Invalid',
  'id': 'foo',
  'properties': []
};

export const errors = [
  {
    keyword: 'required',
    dataPath: '',
    schemaPath: '#/required',
    params: { missingProperty: 'appliesTo' },
    message: "should have required property 'appliesTo'"
  }
];
