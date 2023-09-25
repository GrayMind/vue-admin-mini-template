module.exports = {
  root: true,

  env: {
    node: true,
    browser: true,
    es6: true,
  },

  extends: [
    'plugin:vue/strongly-recommended',
    'eslint:recommended',
  ],

  parserOptions: {
    parser: '@babel/eslint-parser',
  },

};
