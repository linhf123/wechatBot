'use strict';

module.exports = {
  plugins: ['eslint-plugin-nodejs'],
  env: {
    node: true,
    es6: true
  },
  parserOptions: {
    ecmaVersion: 2017
  },
  rules: {
    // Possible Errors
    // https://github.com/eslint/eslint/tree/master/docs/rules#possible-errors
    'comma-dangle': [2, 'only-multiline'],
    'no-control-regex': 2,
    'no-debugger': 2,
    'no-dupe-args': 2,
    'no-dupe-keys': 2,
    'no-duplicate-case': 2,
    'no-empty-character-class': 2,
    'no-ex-assign': 2,
    'no-extra-boolean-cast' : 2,
    'no-extra-parens': [2, 'functions'],
    'no-extra-semi': 2,
    'no-func-assign': 2,
    'no-invalid-regexp': 2,
    'no-irregular-whitespace': 2,
    'no-obj-calls': 2,
    'no-proto': 2,
    'no-template-curly-in-string': 2,
    'no-unexpected-multiline': 2,
    'no-unreachable': 2,
    'no-unsafe-negation': 2,
    'use-isnan': 2,
    'valid-typeof': 2,

    // Best Practices
    // https://github.com/eslint/eslint/tree/master/docs/rules#best-practices
    'dot-location': [2, 'property'],
    'no-fallthrough': 2,
    'no-global-assign': 2,
    'no-multi-spaces': 2,
    'no-octal': 2,
    'no-redeclare': 2,
    'no-self-assign': 2,
    'no-unused-labels': 2,
    'no-useless-call': 2,
    'no-useless-escape': 2,
    'no-void': 2,
    'no-with': 2,

    // Strict Mode
    // http://eslint.org/docs/rules/#strict-mode
    'strict': [2, 'global'],

    // Variables
    // http://eslint.org/docs/rules/#variables
    'no-delete-var': 2,
    'no-undef': 2,
    'no-unused-vars': [2, {args: 'none'}],

    // Node.js and CommonJS
    // http://eslint.org/docs/rules/#nodejs-and-commonjs
    'no-mixed-requires': 2,
    'no-new-require': 2,
    'no-path-concat': 2,
    'no-restricted-modules': [2, 'sys', '_linklist'],
    'no-restricted-properties': [2, {
        'object': 'assert',
        'property': 'deepEqual',
        'message': 'Use assert.deepStrictEqual().'
      }, {
        'object': 'assert',
        'property': 'equal',
        'message': 'Use assert.strictEqual() rather than assert.equal().'
      }, {
        'object': 'assert',
        'property': 'notEqual',
        'message': 'Use assert.notStrictEqual() rather than assert.notEqual().'
      }, {
        'property': '__defineGetter__',
        'message': '__defineGetter__ is deprecated.'
      }, {
        'property': '__defineSetter__',
        'message': '__defineSetter__ is deprecated.'
      }
    ],

    // Stylistic Issues
    // https://github.com/eslint/eslint/tree/master/docs/rules#stylistic-issues
    'block-spacing': 2,
    'brace-style': [2, '1tbs', { allowSingleLine: true }],
    'comma-spacing': 2,
    'comma-style': 2,
    'computed-property-spacing': 2,
    'eol-last': 2,
    'func-call-spacing': 2,
    'func-name-matching': 2,
    indent: [2, 2, { SwitchCase: 1, MemberExpression: 1 }],
    'key-spacing': [2, { mode: 'minimum' }],
    'keyword-spacing': 2,
    'linebreak-style': [2, 'unix'],
    'max-len': [2, 140, 2],
    'new-parens': 2,
    'no-mixed-spaces-and-tabs': 2,
    'no-multiple-empty-lines': [2, { 'max': 2, 'maxEOF': 0, 'maxBOF': 0 }],
    'no-tabs': 2,
    'no-trailing-spaces': 2,
    quotes: [2, 'single', 'avoid-escape'],
    semi: 2,
    'semi-spacing': 2,
    'space-before-blocks': [2, 'always'],
    'space-before-function-paren': [2, 'never'],
    'space-in-parens': [2, 'never'],
    'space-infix-ops': 2,
    'space-unary-ops': 2,

    // ECMAScript 6
    // http://eslint.org/docs/rules/#ecmascript-6
    'arrow-parens': [2, 'always'],
    'arrow-spacing': [2, { 'before': true, 'after': true }],
    'constructor-super': 2,
    'no-class-assign': 2,
    'no-confusing-arrow': 2,
    'no-const-assign': 2,
    'no-dupe-class-members': 2,
    'no-new-symbol': 2,
    'no-this-before-super': 2,
    'prefer-const': [2, { 'ignoreReadBeforeAssign': true }],
    'rest-spread-spacing': 2,
    'template-curly-spacing': 2,

    // Custom rules in tools/eslint-rules
    'nodejs/align-multiline-assignment': 2,
    'nodejs/assert-fail-single-argument': 2,
    'nodejs/assert-throws-arguments': [2, { requireTwo: false }],
    'nodejs/new-with-error': [2, 'Error', 'RangeError', 'TypeError',
        'SyntaxError', 'ReferenceError'],
    'nodejs/timer-arguments': 2
  },
  globals: {
    COUNTER_HTTP_CLIENT_REQUEST: false,
    COUNTER_HTTP_CLIENT_RESPONSE: false,
    COUNTER_HTTP_SERVER_REQUEST: false,
    COUNTER_HTTP_SERVER_RESPONSE: false,
    COUNTER_NET_SERVER_CONNECTION: false,
    COUNTER_NET_SERVER_CONNECTION_CLOSE: false,
    DTRACE_HTTP_CLIENT_REQUEST: false,
    DTRACE_HTTP_CLIENT_RESPONSE: false,
    DTRACE_HTTP_SERVER_REQUEST: false,
    DTRACE_HTTP_SERVER_RESPONSE: false,
    DTRACE_NET_SERVER_CONNECTION: false,
    DTRACE_NET_STREAM_END: false,
    LTTNG_HTTP_CLIENT_REQUEST: false,
    LTTNG_HTTP_CLIENT_RESPONSE: false,
    LTTNG_HTTP_SERVER_REQUEST: false,
    LTTNG_HTTP_SERVER_RESPONSE: false,
    LTTNG_NET_SERVER_CONNECTION: false,
    LTTNG_NET_STREAM_END: false
  }
};