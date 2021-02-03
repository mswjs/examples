import React from 'react'
import { useFetch } from '../../../hooks/useFetch'
import './GitHubUser.css'

export const GitHubUser = ({ username }) => {
  const { data, loading, error, refetch } = useFetch(
    `https://api.github.com/users/${username}`,
  )
  const { name, login, avatar_url } = data || {}

  const containerClassNames = [
    'container',
    loading && 'loading',
    error && 'error',
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <div className={containerClassNames}>
      <div className="avatar-container">
        {avatar_url && <img className="avatar" src={avatar_url} alt={name} />}
      </div>
      {error ? (
        <div>
          <p>Failed to fetch a GitHub user.</p>
          <button onClick={refetch}>Retry</button>
        </div>
      ) : (
        <div>
          <p className="name" data-testid="full-name">
            {name}
          </p>
          <p className="username">{login}</p>
        </div>
      )}
    </div>
  )
}
