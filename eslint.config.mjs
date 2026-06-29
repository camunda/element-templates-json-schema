import bpmnIoPlugin from 'eslint-plugin-bpmn-io';

const files = {
  ignored: [
    '*.json',
    '.nyc_output',
    'coverage',
    '**/dist'
  ],
  build: [
    '**/*.js',
    '**/*.mjs'
  ],
  test: [
    '**/test/**/*.js'
  ]
};


export default [
  {
    ignores: files.ignored
  },
  ...bpmnIoPlugin.configs.node.map(config => {
    return {
      ...config,
      files: files.build
    };
  }),
  {
    languageOptions: {
      ecmaVersion: 2026
    },
    files: files.build
  },
  ...bpmnIoPlugin.configs.mocha.map(config => {
    return {
      ...config,
      files: files.test
    };
  })
];
