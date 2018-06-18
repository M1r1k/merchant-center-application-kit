module.exports = {
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 8,
    sourceType: 'module',
  },
  extends: [
    'airbnb-base',
    'plugin:jest/recommended',
    'plugin:react/recommended',
    'prettier',
    'prettier/react',
  ],
  env: {
    browser: true,
    es6: true,
    jest: true,
    node: true,
    mocha: false,
  },
  plugins: [
    'import',
    'jest',
    'jsx-a11y',
    'prettier',
    'prefer-object-spread',
    'react',
  ],
  rules: {
    'class-methods-use-this': [
      'error',
      {
        exceptMethods: [
          'render',
          'getInitialState',
          'getDefaultProps',
          'getChildContext',
          'shouldComponentUpdate',
          'UNSAFE_componentWillMount',
          'UNSAFE_componentWillReceiveProps',
          'UNSAFE_componentWillUpdate',
          'componentWillUnmount',
          'componentDidMount',
          'componentDidUpdate',
        ],
      },
    ],
    'function-paren-newline': 0,
    'import/extensions': [
      'error',
      'always',
      {
        js: 'never',
      },
    ],
    'import/no-extraneous-dependencies': 0,
    'import/no-named-as-default': 0,
    'import/no-unresolved': 0,
    'import/first': 0,
    'import/order': 2,
    'no-restricted-globals': ['error', 'find', 'name', 'location'],
    'no-warning-comments': 0,
    'no-use-before-define': [
      'error',
      {
        functions: false,
      },
    ],
    'no-underscore-dangle': 0,
    'jest/no-identical-title': 'warn',
    'jest/no-focused-tests': 2,
    'react/jsx-uses-vars': 2,
    'react/wrap-multilines': 0,
    'react/no-deprecated': 'error',
    'react/no-find-dom-node': 0,
    'react/display-name': [
      1,
      {
        ignoreTranspilerName: true,
      },
    ],
    'prefer-object-spread/prefer-object-spread': 2,
    'prefer-destructuring': 0,
    'prefer-promise-reject-errors': 'warn',
    'react/jsx-no-target-blank': 0,
  },
  overrides: [
    {
      files: ['*.spec.js'],
      rules: {
        'react/display-name': 0,
      },
    },
  ],
};
