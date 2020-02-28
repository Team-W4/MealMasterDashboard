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
    'react/jsx-curly-spacing': [
      2, 
      {
        'when': 'always',
        'spacing': {
          'objectLiterals': 'never',
        },
      }
    ],
    'react/jsx-curly-newline': 'off',
    'react/static-property-placement': 'off',
    'react/state-in-constructor': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/prop-types': 'off',
  }
};
