module.exports = {
  root: true,
  extends: '@react-native-community',
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
    tsconfigRootDir: __dirname,
  },
  plugins: [
    '@typescript-eslint',
  ],
  extends: [
    'airbnb-typescript',
    'prettier/@typescript-eslint',
  ],
  rules: {
    'semi': ['error', 'always'],
    'react/jsx-curly-spacing': [
      2, 
      {
        'when': 'always',
        'spacing': {
          'objectLiterals': 'never',
        },
      }
    ],
    'no-console': ['warn', { 'allow': ['warn', 'error'] }],
    'jsx-quotes': ['error', 'prefer-double'],
    'react/jsx-curly-newline': 'off',
    'react/static-property-placement': 'off',
    'react/state-in-constructor': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/prop-types': 'off',
  }
};
