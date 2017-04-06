const Book = require('./../model/Book');

const getBooks = (req, res) => {
  console.log('get to books');
  Book.find()
    .then((books) => {
      const addedBooks = books.filter(book => book.added === true).length;
      const booksArray = [];

      books.forEach((book) => {
        booksArray.push({
          id: book.id,
          author: book.author,
          name: book.name,
          added: book.added,
          price: book.price
        });
      });

      res.send({
        booksArray,
        addedBooks
      });
    })
    .catch((error) => {
      res.send(error);
      console.log(error);
    });
};

exports.getBooks = getBooks;
