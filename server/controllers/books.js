const Book = require('./../model/Book');

const getBooks = (req, res) => {
  console.log('get to books');
  Book.find()
    .then((books) => {
      const booksArray = [];

      let addedBooks = 0;
      let pricesSum = 0;

      books.forEach((book) => {
        if (book.added) {
          addedBooks = addedBooks + 1;
          pricesSum = pricesSum + book.price;
        }

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
        addedBooks,
        pricesSum
      });
    })
    .catch((error) => {
      res.send(error);
      console.log(error);
    });
};

exports.getBooks = getBooks;
