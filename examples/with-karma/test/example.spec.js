const { expect } = require('chai')
import { worker } from '../mocks/browser'

describe('Fetching foo', function () {
  this.beforeAll(() => {
    worker.start()
  })

  this.afterEach(() => {
    worker.resetHandlers()
  })

  this.afterAll(() => {
    worker.stop()
  })

  it('should handle foo', () => {
    return fetch('/foo')
      .then((response) => response.text())
      .then(function (data) {
        expect(data).to.equal('foo')
      })
  })
})
