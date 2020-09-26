module.exports = {
  preset: "react-native",
  setupFilesAfterEnv: [
    '@testing-library/jest-native/extend-expect',
    './jest.setup.js'
  ]
}
