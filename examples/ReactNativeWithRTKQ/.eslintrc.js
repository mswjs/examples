module.exports = {
  root: true,
  extends: ['@react-native-community', 'plugin:jest/recommended'],
  plugins: ['jest'],
  overrides: [
    {
      files: ['jestSetup.js'],
      rules: {
        'import/no-extraneous-dependencies': 'off',
        'import/no-default-export': 'off',
      },
    },
  ],
};
