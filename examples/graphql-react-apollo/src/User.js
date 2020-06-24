import React from 'react'
import { useQuery } from '@apollo/react-hooks'
import { gql } from 'apollo-boost'

const USER_QUERY = gql`
  query getUser {
    user {
      id
      firstName
      lastName
    }
  }
`

export const User = () => {
  const { data, loading, error } = useQuery(USER_QUERY)
  if (loading) {
    return <div>loading</div>
  } else if (error) {
    return <div>error</div>
  }

  const { user } = data

  return (
    <div>
      <h1>
        <span data-testid="firstName">{user.firstName}</span>{' '}
        <span data-testid="lastName">{user.lastName}</span>
      </h1>
      <p data-testid="userId">{user.id}</p>
    </div>
  )
}
