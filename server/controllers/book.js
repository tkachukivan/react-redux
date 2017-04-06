const Book = require('./../model/Book');

const updateBook = (req, res) => {
  console.log(`put to book with id ${req.params.id}`);
  let type;
  Book.findOne({ _id: req.params.id })
    .then((book) => {
      book.added = !book.added;
      type = book.added ? 'add' : 'remove';

      console.log(`put to book with id ${req.params.id} with type ${type}`);
      return book.save();
    })
    .then(() => {
      res.send({
        type
      });
    })
    .catch((err) => {
      console.log(err);
      res.send(err);
    });
};

const getBook = (req, res) => {
  console.log(`get book by id ${req.params.id}`);

  let addedBooks;
  Book.find()
    .then((books) => {
      addedBooks = books.filter(book => book.added === true).length;
      return Book.findOne({ _id: req.params.id });
    })
    .then((bookById) => {
      res.send({
        bookById,
        addedBooks
      });
    })
    .catch((err) => {
      console.log(`can\`t find book with id ${req.params.id}`);
      console.log(err);
      res.send({
        addedBooks,
        not_found: true,
        err
      });
    });
};

exports.updateBook = updateBook;
exports.getBook = getBook;
