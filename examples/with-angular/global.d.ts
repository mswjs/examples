import { TestingLibraryMatchers } from '@testing-library/jest-dom/matchers'

declare global {
  namespace Jest {
    // @ts-ignore Fix this, if you dare.
    interface Matchers<T> extends TestingLibraryMatchers<T, void> {}
  }
}
