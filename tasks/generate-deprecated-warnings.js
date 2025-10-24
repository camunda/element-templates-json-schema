const readFile = require('fs').readFileSync,
      writeFile = require('fs').writeFileSync,
      mkdir = require('fs').mkdirSync;

const pathJoin = require('path').join,
      dirname = require('path').dirname;

const mri = require('mri');

const argv = process.argv.slice(2);

async function bundleWarnings(warningMessages, path) {
  return writeWarnings(warningMessages, path);
}


function writeWarnings(warningMessages, path) {
  const filePath = pathJoin(path);

  try {
    mkdir(dirname(filePath));
  } catch {

    // directory may already exist
  }

  writeFile(filePath, JSON.stringify(warningMessages, 0, 2));

  return filePath;
}


const {
  input,
  output
} = mri(argv, {
  alias: {
    i: 'input',
    o: 'output'
  }
});

if (!input || !output) {
  console.error('Arguments missing.');
  console.error('Example: node tasks/generate-error-messages.js --input=./src/error-messages.json --output=./resources/error-messages.json');
  process.exit(1);
}

bundleWarnings(JSON.parse(readFile(input)), output);
