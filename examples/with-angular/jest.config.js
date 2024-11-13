module.exports = {
  preset: 'jest-preset-angular',
  testEnvironment: 'jest-fixed-jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  globalSetup: 'jest-preset-angular/global-setup',
  testEnvironmentOptions: {
    customExportConditions: [''],
  },
  globals: {
    Request,
    Response,
    TextEncoder,
    TextDecoder,
  },
}
