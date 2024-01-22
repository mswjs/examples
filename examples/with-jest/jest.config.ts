import type { Config } from 'jest'

export default {
  rootDir: __dirname,
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  transform: {
    '^.+\\.tsx?$': '@swc/jest',
  },
} satisfies Config
