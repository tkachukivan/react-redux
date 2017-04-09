import React, { PropTypes } from 'react';
import { Link } from 'react-router';

const BookItem = ({ book }) => (
  <Link
    to={`/book/${book.id}`}
    className="book"
  >
    <div className="book__info">
      <span className="book__name">
        &quot;{book.name}&quot;
      </span>{' by '}
      <span className="book__author">
        {book.author}
      </span>
    </div>
    <div className="book__price">
      {book.price}$
    </div>
  </Link>
);

BookItem.propTypes = {
  book: PropTypes.object.isRequired
};

export default BookItem;
