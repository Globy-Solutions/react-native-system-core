import js from "@eslint/js";

export default [
  js.configs.recommended,
  {
    // meta: {},
    // configs: {},
    // processors: {}
    rules: {
      'semi': 0,
      'jsx-quotes': 0,
      'no-console': 1,
      'prettier/prettier': 0,
      'react/react-in-jsx-scope': 0,
      'react-native/no-raw-text': 0,
      'comma-dangle': ['error', 'never'],
      'react-native/no-color-literals': 0,
      'react/display-name': 0,
      'react/no-unescaped-entities': 0,
      'import/no-anonymous-default-export': 0,
      '@typescript-eslint/no-var-requires': 0,
      '@typescript-eslint/no-non-null-assertion': 0,
      '@typescript-eslint/no-unnecessary-type-assertion': 0,
      '@typescript-eslint/no-unnecessary-condition': 0,
      '@typescript-eslint/visitor-keys': 0,
      'no-unused-vars': [
        'error',
        {
          vars: 'all',
          args: 'after-used',
          caughtErrors: 'all',
          ignoreRestSiblings: false,
          reportUsedIgnorePattern: false
        }
      ],
      'no-restricted-syntax': [
        'error',
        {
          selector:
            "CallExpression[callee.object.name='console'][callee.property.name!=/^(warn|error|info|trace)$/]",
          message: 'Unexpected property on console object was called'
        }
      ],
      'no-inline-comments': [
        'error',
        {
          ignorePattern: 'eslint-disable-*|@ts-ignore'
        }
      ],
      'lines-around-comment': [
        'error',
        {
          beforeLineComment: true,
          beforeBlockComment: true,
          allowBlockStart: true,
          allowClassStart: true,
          allowObjectStart: true,
          allowArrayStart: true
        }
      ]
    },
    ignores: [
      'node_modules/',
      'example/node_modules/**/*',
      'android/',
      'ios/',
      'dist/',
      'build/',
      'coverage/',
      'jest.config.js',
      'metro.config.js',
      'babel.config.js'
    ]
  }
];
