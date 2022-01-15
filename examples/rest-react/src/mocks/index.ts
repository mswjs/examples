// Start the mocking conditionally.
if (process.env.NODE_ENV === 'development') {
  const { worker } = require('./browser.msw')
  worker.start()
}

export {}
