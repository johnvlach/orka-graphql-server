const { graphqlHTTP } = require('koa-graphql');

const users = [
  {
    id: 1,
    name: 'John',
    surname: 'Smith',
    address: {
      street: 'West Ruth Avenue',
      number: '123',
      postalCode: '12001'
    }
  },
  {
    id: 2,
    name: 'Jane',
    surname: 'Doe',
    address: {
      street: 'Route',
      number: '66',
      postalCode: '00000'
    }
  }];

  const books = [
    {
      authorId: 1,
      title: 'Don\'t read this book',
      year: 2020
    },
    {
      authorId: 2,
      title: 'Covid-20',
      year: 2023
    },
    {
      authorId: 1,
      title: 'How to procrastinate effectively',
      year: 1712
    }
  ]

const getUserById = async id => {
  const user = users.filter(u => u.id == id)[0];
  return {
    author: () => {
      return {
        id: () => user.id,
        name: () => user.name,
        surname: () => user.surname,
        address: {
          street: () => user.address.street,
          number: () => user.address.number,
          postalCode: () => user.address.postalCode
        },
        books: () => {
          const filteredBooks = books.filter(b => b.authorId == id)
          return filteredBooks.map(b => ({
            title: () => b.title,
            year: () => b.year
          }))
        }
      }
    }
  }
}

module.exports = {
  post: {
    '/graphql': graphqlHTTP(async (request, response, ctx, graphQLParams) => {
      return {
        schema: require('../schema'),
        rootValue: await getUserById(graphQLParams.variables.id),
        graphiql: true
      }
    })
  }
};
