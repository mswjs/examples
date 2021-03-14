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
        pagination: {
          pageSize: 10,
          pageNo: 0,
          sortedColumn: 'createdBy',
          sortedType: 'asc',
        },
      }),
    })
      .then(async (response) => {
        console.log('Fetch complete: ', await response.json())
        setFetched(true)
      })
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
