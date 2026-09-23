import globals from 'globals';
export default [{
  files: ['**/*.js', '**/*.mjs'],
  ignores: ['web/**', 'artifacts/**', 'node_modules/**'],
  languageOptions: { ecmaVersion: 'latest', sourceType: 'module', globals: { ...globals.browser, ...globals.node } },
  rules: { 'no-undef': 'error', 'no-unreachable': 'error', 'no-dupe-keys': 'error', 'valid-typeof': 'error' }
}];
