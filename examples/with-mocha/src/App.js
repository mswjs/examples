import React, { useEffect, useState } from 'react'

function App() {
  const [fetched, setFetched] = useState(false)

  useEffect(() => {
    fetch('http://example.com/api/getList', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        sample: 'value',
      }),
    })
      .then(() => setFetched(true))
      .catch((error) => {
        console.error('Failed to fetch: ', error)
      })
  }, [])

  return (
    <React.Fragment>
      <h1>App</h1>
      <div data-testid="fetched">{String(fetched)}</div>
    </React.Fragment>
  )
}

export default App
