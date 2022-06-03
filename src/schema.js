const { buildSchema } = require('graphql');

// Construct a schema, using GraphQL schema language
module.exports = buildSchema(`
  type Query {
    author(id: Int): Author
    book(title: String): Book
  }

  type Author {
    id: Int
    name: String
    surname: String
    address: Address
    books: [Book]
  }

  type Address {
    street: String
    number: Int
    postalCode: String
  }

  type Book {
    title: String
    year: Int
    authorId: Int
  }
`);