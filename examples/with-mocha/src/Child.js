import React, { useEffect, useState } from 'react'

function Child() {
  const [fetched, setFetched] = useState(false)
  const [result, setResult] = useState()
  useEffect(() => {
    fetch('http://example.com/api/getChildList', {
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
        const result = await response.json()
        console.log('Fetch complete: ', result)
        setFetched(true)
        setResult(result)
      })
      .catch((error) => {
        console.error('Failed to fetch: ', error)
      })
  }, [])

  return (
    <React.Fragment>
      <h1>Child</h1>
      <div data-testid="fetched">{String(fetched)}</div>
      <div data-testid="result">{JSON.stringify(result)}</div>
    </React.Fragment>
  )
}

export default Child
