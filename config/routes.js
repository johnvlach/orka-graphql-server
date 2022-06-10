const { graphqlHTTP } = require('koa-graphql');
const authorsAndBooks = require('../src/authors-and-books');

module.exports = {
  post: {
    '/graphql': graphqlHTTP(async (_request, _response, _ctx) => {
      return {
        schema: require('../src/schema'),
        rootValue: await authorsAndBooks.fetchData()
      }
    })
  }
};
