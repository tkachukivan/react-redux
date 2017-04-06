const Book = require('./../model/Book');

const buy = (req, res) => {
  let pricesSum;

  Book.find()
    .then((books) => {
      pricesSum = books.reduce((sum, book) => {
        if (book.added) {
          sum += book.price;
          book.added = false;

          book.save()
            .catch((err) => {
              res.send(err);
              throw Error(`can\`t save changes to book ${book['_id']}`);
            });
        }

        return sum;
      }, 0);

      console.log(`buy request on sum ${pricesSum}`);
      res.send({
        pricesSum
      });
    })
    .catch((error) => {
      console.log(error);
      res.send(error);
    });
};

exports.buy = buy;
