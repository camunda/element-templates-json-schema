const fs = require('fs');
const path = require('path');
const Ajv = require('ajv').default;
const standaloneCode = require('ajv/dist/standalone').default;
const addAjvErrors = require('ajv-errors');
const rimraf = require('rimraf');

const { main: mainLocation } = require('../package.json');
const schema = require('../resources/schema.json');

run();

function run() {
  prepare();

  const validatorCode = compileValidator();

  writeToMainExport(validatorCode);
}

function prepare() {
  const dist = path.join(__dirname, '..', 'dist');

  rimraf.sync(dist);
  fs.mkdirSync(dist);
}

function compileValidator() {
  const ajv = new Ajv({
    code: {
      source: true
    },
    strict: false,
    allErrors: true
  });
  addAjvErrors(ajv);

  const validate = ajv.compile(schema);

  return standaloneCode(ajv, validate);
}

function writeToMainExport(content) {
  fs.writeFileSync(path.join(__dirname, '..', mainLocation), content);
}
