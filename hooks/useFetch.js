import { useState, useEffect, useCallback } from 'react'

export function useFetch(init, options) {
  const [{ data, loading, error }, setUser] = useState({
    data: null,
    loading: true,
    error: null,
  })

  const refetch = useCallback(() => {
    setUser({ loading: true, data: null, error: null })

    fetch(init, options)
      .then((res) => res.json())
      .then((res) => {
        setUser({ data: res, loading: false, error: null })
      })
      .catch((error) => {
        setUser({ data: null, loading: false, error: error.message })
      })
  }, [init, options])

  useEffect(refetch, [])

  return { data, loading, error, refetch }
}
