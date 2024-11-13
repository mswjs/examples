import type { Config } from 'jest'

export default {
  rootDir: __dirname,

  // Use a custom environment to fix missing globals in jsdom.
  testEnvironment: 'jest-fixed-jsdom',

  // Provide a setup file to enable MSW.
  setupFilesAfterEnv: ['./jest.setup.ts'],

  // (Optional) Add suppor for TypeScript in Jest.
  transform: {
    '^.+\\.tsx?$': '@swc/jest',
  },
} satisfies Config
