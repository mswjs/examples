module.exports = {
  preset: 'jest-preset-angular',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  globalSetup: 'jest-preset-angular/global-setup',
  testEnvironmentOptions: {
    customExportConditions: [''],
  },
  globals: {
    Request,
    Response,
    TextEncoder,
    TextDecoder
  },
}
