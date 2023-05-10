module.exports = {
  env: {
    browser: true,
    es2020: true
  },
  extends: ['plugin:jest-dom/recommended', 'eslint:recommended', 'plugin:@typescript-eslint/recommended', 'plugin:react-hooks/recommended', 'plugin:storybook/recommended'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: ['react-refresh', 'jest-dom'],
  rules: {
    'react-refresh/only-export-components': 'warn'
  }
};