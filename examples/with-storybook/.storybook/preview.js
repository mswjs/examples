import { worker } from '../src/mocks'

// Start the mocking when each story is loaded.
// Repetitive calls to the `.start()` method do not register a new worker,
// but check whether there's an existing once, reusing it, if so.
worker.start()
