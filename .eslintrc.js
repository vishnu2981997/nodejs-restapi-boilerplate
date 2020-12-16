module.exports = {
  root: true,
  env: {
    jest: true,
    node: true,
    es6: true,
  },
  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaVersion: 2019,
    sourceType: 'module',
  },
  // https://github.com/feross/standard/blob/master/RULES.md#javascript-standard-style
  extends: [
    'standard',
    'plugin:@typescript-eslint/recommended',
    'plugin:security/recommended',
    'plugin:prettier/recommended',
  ],
  plugins: ['@typescript-eslint', 'security', 'prettier'],
  // add your custom rules here
  rules: {
    '@typescript-eslint/no-var-requires': 0,
    '@typescript-eslint/indent': ['error', 2],
    '@typescript-eslint/camelcase': 0,
    semi: 'off',
    '@typescript-eslint/semi': 0,
    '@typescript-eslint/member-delimiter-style': [
      'error',
      {
        multiline: {
          delimiter: 'comma',
          requireLast: false,
        },
        singleline: { delimiter: 'comma' },
      },
    ],
    '@typescript-eslint/explicit-module-boundary-types': 0,
    '@typescript-eslint/no-empty-interface': 0,
    '@typescript-eslint/no-use-before-define': 0,
    '@typescript-eslint/no-explicit-any': 0,
    '@typescript-eslint/class-name-casing': 0,
    '@typescript-eslint/no-unused-vars': 0,
    '@typescript-eslint/explicit-function-return-type': 0,
    'handle-callback-err': 0,
    'prefer-promise-reject-errors': 0,
    'import/no-duplicates': 1,
    // allow paren-less arrow functions
    'arrow-parens': 0,
    'prefer-arrow-callback': 0,
    // allow async-await
    'generator-star-spacing': 0,
    'no-console': 0,
    'no-unused-vars': 0,
  },
};
