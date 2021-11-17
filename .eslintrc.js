module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
    amd: true,
    jest: true,
  },
  root: true,
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    '@react-native-community',
    'plugin:jest/recommended',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint', 'import'],
  rules: {
    indent: ['error', 2],
    'linebreak-style': ['error', 'unix'],
    quotes: ['warn', 'single'],
    semi: ['warn', 'never'],
    'import/order': [
      'warn',
      {
        alphabetize: {
          caseInsensitive: true,
          order: 'asc',
        },
        groups: [
          'builtin',
          'external',
          'index',
          'sibling',
          'parent',
          'internal',
        ],
      },
    ],
  },
}
