const { authors, books } = require('./data');

const getAuthor = async id => {
  const user = authors.filter(u => u.id == id)[0];
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
          const filteredBooks = books.filter(b => b.authorId == id);
          return filteredBooks.map(b => ({
            title: () => b.title,
            year: () => b.year
          }))
        }
      }
    }
  }
};

module.exports = { getAuthor }