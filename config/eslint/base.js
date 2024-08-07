const fs = require('fs');
const path = require('path');

const tsConfig = fs.existsSync('tsconfig.json')
  ? path.resolve('tsconfig.json')
  : undefined;

module.exports = {
  parser: '@typescript-eslint/parser',
  extends: ['plugin:import/errors', 'eslint:recommended', 'prettier'],
  plugins: ['prettier', '@typescript-eslint'],
  settings: {
    react: {
      version: 'detect',
    },
  },
  ignorePatterns: ['next.config.mjs'],
  parserOptions: {
    project: tsConfig,
    createDefaultProgram: true,
    sourceType: 'module',
    ecmaFeatures: {
      modules: true,
      experimentalObjectRestSpread: true,
      jsx: true,
    },
  },
  globals: {
    process: false,
    module: false,
    jest: false,
    describe: false,
    test: false,
    expect: false,
    beforeAll: false,
    afterEach: false,
    afterAll: false,
  },
  env: {
    browser: true,
    node: true,
  },
  rules: {
    camelcase: ['error', { properties: 'never', ignoreDestructuring: true }],
    'import/no-unresolved': 'off',
  },
};
