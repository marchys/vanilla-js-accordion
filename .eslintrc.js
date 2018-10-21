module.exports = {
  extends: ['airbnb'],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
  },
  rules: {
    // http://eslint.org/docs/rules/
    'no-void': 0,
    'arrow-parens': ['error', 'as-needed'],

    // https://github.com/benmosher/eslint-plugin-import/tree/master/docs/rules
    'import/prefer-default-export': 1,
    'import/no-extraneous-dependencies': 1,
    'import/no-named-as-default': 0,
    // https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules
    'react/prefer-stateless-function': 1,
  },
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    jest: true,
    node: true,
  },
  settings: {
    'import/resolver': {
      node: {
        paths: ['src'],
      },
    },
  },
};
