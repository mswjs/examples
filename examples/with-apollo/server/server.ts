import { ApolloServer } from '@apollo/server'
import { PubSub } from 'graphql-subscriptions'
import { makeExecutableSchema } from '@graphql-tools/schema'

const pubsub = new PubSub()

const typeDefs = `
type Book {
  id: ID!
  title: String!
}

type Query {
  books: [Book]
}

type Mutation {
  addBook(title: String!): Book
}

type Subscription {
  bookAdded: Book
}
`

const books = [
  {
    id: '1',
    title: 'Harry Potter and the Chamber of Secrets',
  },
  {
    id: '2',
    title: 'Jurassic Park',
  },
]

const resolvers = {
  Query: {
    books: () => books,
  },
  Mutation: {
    async addBook(root, args) {
      const newBook = {
        id: String(books.length + 1),
        title: args.title,
      }

      books.push(newBook)
      await pubsub.publish('BOOK_ADDED', { bookAdded: newBook })

      return newBook
    },
  },
  Subscription: {
    bookAdded: {
      subscribe: () => pubsub.asyncIterableIterator('BOOK_ADDED'),
    },
  },
}

export const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
})

export const server = new ApolloServer({
  schema,
})
