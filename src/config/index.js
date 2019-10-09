const configCommon = require('./common.json');
const configEnv = require(`./${process.env.NODE_ENV}.json`);
const importedCustomTypes = {
  ...require('../TemplateModule').CUSTOM_TYPES
};

// Accepting React env vars and aggregating them into `config` object.
const envVarNames = [
  'REACT_APP_PROVIDER_SOCKET',
  'REACT_APP_DEVELOPMENT_KEYRING'
];
const envVars = envVarNames.reduce((mem, n) => {
  if (process.env[n] !== undefined) mem[n.slice(10)] = process.env[n];
  return mem;
}, {});

const config = { ...configCommon, ...configEnv, ...envVars };
config.CUSTOM_TYPES = Object.assign({}, config.CUSTOM_TYPES, importedCustomTypes);
export default config;
