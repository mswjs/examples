import { useEffect } from 'react'
import { useQuery, gql, useMutation } from '@apollo/client'

const BOOKS_QUERY = gql`
  query GetBooks {
    books {
      id
      title
    }
  }
`

const ADD_BOOK = gql`
  mutation AddBook($title: String!) {
    addBook(title: $title) {
      id
    }
  }
`

const BOOKS_SUBSCRIPTION = gql`
  subscription {
    bookAdded {
      id
      title
    }
  }
`

type Book = {
  id: string
  title: string
}

export default function App() {
  const { loading, error, data, subscribeToMore } = useQuery<{ books: Book[] }>(
    BOOKS_QUERY,
  )
  const [addBook] = useMutation(ADD_BOOK)

  useEffect(() => {
    const terminateSubscription = subscribeToMore({
      document: BOOKS_SUBSCRIPTION,
      updateQuery(prev, { subscriptionData }) {
        // @ts-ignore
        const nextBook = subscriptionData.data.bookAdded
        return Object.assign({}, prev, {
          books: prev.books.concat(nextBook),
        })
      },
    })

    return terminateSubscription
  }, [])

  const handleAddBook = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const form = event.currentTarget
    const data = new FormData(form)
    await addBook({
      variables: {
        title: data.get('title') as string,
      },
      onCompleted() {
        form.reset()
      },
    })
  }

  if (loading) {
    return <p>Fetching...</p>
  }

  if (error) {
    return <p role="alert">Failed to fetch! {error.message}</p>
  }

  return (
    <div>
      <ul>
        {data?.books.map((book) => (
          <li key={book.id}>{book.title}</li>
        ))}
      </ul>

      <hr />

      <form onSubmit={handleAddBook}>
        <input type="text" name="title" placeholder="Book title" required />
        <button type="submit">Add Book</button>
      </form>
    </div>
  )
}
