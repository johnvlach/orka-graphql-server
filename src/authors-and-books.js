const { authors, books } = require('./data');

const fetchData = async () => ({
  author: async (args) => await getAuthor(args.id),
  book: async (args) => await getBook(args.title)
});

const getAuthor = async id => {
  const author = authors.filter(u => u.id == id)[0];
  return {
    id: () => author.id,
    name: () => author.name,
    surname: () => author.surname,
    address: {
      street: () => author.address.street,
      number: () => author.address.number,
      postalCode: () => author.address.postalCode
    },
    books: () => {
      const filteredBooks = books.filter(b => b.authorId == id);
      return filteredBooks.map(b => ({
        title: () => b.title,
        year: () => b.year
      }))
    }
  }
};


getBook = async title => {
  const book = books.filter(b => b.title == title)[0];
  return {
    title: () => book.title,
    year: () => book.year
  }
}

module.exports = { fetchData }