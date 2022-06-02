const authors = [
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
  ];

  module.exports = { books, authors }