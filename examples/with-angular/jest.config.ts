import type { Config } from 'jest'

const config: Config = {
  preset: 'jest-preset-angular',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  testEnvironmentOptions: {
    customExportConditions: [''],
  },
  testEnvironment: 'jest-fixed-jsdom',
  globals: {
    Request,
    Response,
    TextEncoder,
    TextDecoder,
  },
}

export default config
