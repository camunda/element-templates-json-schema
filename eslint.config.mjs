import bpmnIoPlugin from 'eslint-plugin-bpmn-io';

export default [
  {
    ignores: [
      '*.json',
      '.nyc_output',
      'coverage',
      'dist'
    ]
  },
  ...bpmnIoPlugin.configs.node.map(config => {
    return {
      ...config,
      files: [
        '**/*.js'
      ]
    };
  }),
  ...bpmnIoPlugin.configs.mocha.map(config => {
    return {
      ...config,
      files: [
        '**/test/**/*.js'
      ]
    };
  })
];
