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
  const id = req.params.id;
  console.log(`get book by id ${id}`);

  let addedBooks = 0;
  Book.find()
    .then((books) => {
      let bookById;
      books.forEach((book) => {
        if (book.id === id) {
          bookById = book;
        }
        if (book.added) {
          addedBooks++;
        }
      });

      if (!bookById) {
        throw Error(`can\`t find book with id ${id}`);
      }

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
