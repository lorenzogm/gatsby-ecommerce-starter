module.exports = {
  // extends: 'airbnb',
  extends: ['airbnb', 'prettier', 'prettier/react'],
  plugins: ['prettier'],
  settings: {
    'import/resolver': {
      alias: [
        ['components', './src/components'],
        ['constants', './src/constants'],
        ['context', './src/context'],
        ['graphql', './src/graphql'],
        ['pages', './src/pages'],
        ['services', './src/services'],
        ['theme', './src/theme'],
        ['utils', './src/utils'],
      ],
    },
  },
  rules: {
    'no-unused-vars': 'warn',
    'prettier/prettier': [
      'error',
      {
        trailingComma: 'all',
        semi: false,
        singleQuote: true,
        printWidth: 120,
      },
    ],
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'react/jsx-curly-brace-presence': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/prop-types': 'off',
    'no-use-before-define': 'off',
    // 'react-hooks/rules-of-hooks': 'error',
    // 'react-hooks/exhaustive-deps': 'warn',
  },
}
