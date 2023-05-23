const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    id: ID!
    username: String!
    email: String!
    savedBooks: [Book]!
    bookCount: Int!
  }

  type Book {
    id: ID!
    authors: [String]!
    description: String!
    bookId: String!
    image: String
    link: String
    title: String!
  }

  input BookInput {
    authors: [String]!
    description: String!
    bookId: String!
    image: String
    link: String
    title: String!
  }

  type Query {
    user(id: ID!): User
    book(id: ID!): Book
  }

  type Mutation {
    createUser(username: String!, email: String!, password: String!): User
    loginUser(email: String!, password: String!): User
    saveBook(book: BookInput!): User
    deleteBook(bookId: ID!): User
  }
`;

module.exports = typeDefs;