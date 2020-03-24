module.exports = {
  root: true,
  // parserOptions: {
  //   parser: 'babel-eslint',
  //   sourceType: 'module'
  // },
  // env: {
  //   'browser': true,
  //   'es6': true
  // },
  extends: [
    'eslint-config-gnavi',
    'eslint-config-gnavi-react',
    'prettier',
  ],
  plugins: [
    'no-unsafe-regex',
  ],
  // settings: {
  //   'import/extensions': ['.js', '.jsx']
  // },
  rules: {
    'space-before-function-paren': 'off',
    'arrow-parens': ['error', 'as-needed'],
    'import/extensions': 0,
    // 'import/extensions': ['error', 'ignorePackages', {
    //   'js': 'always',
    //   'jsx': 'always',
    // }],
    'import/no-unresolved': 0,
    'indent': 'off',
    'no-console': 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-magic-numbers': 'off',
    'no-mixed-operators': 'off',
    'no-param-reassign': 'off',
    'no-underscore-dangle': 'off',
    'no-unsafe-regex/no-unsafe-regex': 'error',
    'no-unused-expressions' : ['error', { 'allowTernary': true }],
    'no-use-before-define': 'off',
    'react/jsx-filename-extension': [1, { 'extensions': ['.js', '.jsx']  }],
    'import/no-default-export': 'off',
    'import/prefer-default-export': 'off'
  }
}
