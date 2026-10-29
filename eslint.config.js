const js = require('@eslint/js');
const globals = require('globals');

module.exports = [
  js.configs.recommended,
  {
    files: ['**/*.js'],
    languageOptions: {
      globals: {
        ...globals.node,
        ...globals.jest
      }
    },
    rules: {
      'no-unused-vars': 'error',
      'no-undef': 'error'
    }
  },
  {
    ignores: [
      'node_modules/**',
      'coverage/**',
      'dist/**'
    ]
  }
];