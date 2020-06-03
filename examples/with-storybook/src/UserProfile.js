import React, { useState, useEffect } from 'react'

export const UserProfile = () => {
  const [user, setUser] = useState(null)

  useEffect(() => {
    fetch('/user')
      .then((res) => res.json())
      .then(setUser)
  }, [])

  if (!user) {
    return <p>Fetching user...</p>
  }

  return (
    <p data-testid="full-name">
      {user.firstName} {user.lastName}
    </p>
  )
}
