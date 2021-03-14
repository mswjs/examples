const expect = require('expect')
const extendExpectMatchers = require('@testing-library/jest-dom/dist/matchers')

// Extend our expect with @testing-library/jest-dom
expect.extend(extendExpectMatchers)

global.expect = expect
