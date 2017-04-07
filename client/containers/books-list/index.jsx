import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import BookItem from '../../components/book-list-item';

const BooksList = ({ books }) => {
  books = books.map(book => (
    <li key={book.id}>
      <BookItem book={book} />
    </li>
    )
  );
  return (
    <div className="books-list-wrapper">
      <ul className="books-list">
        {books}
      </ul>
    </div>
  );
};

BooksList.propTypes = {
  books: PropTypes.arrayOf(React.PropTypes.object).isRequired,
};

export default connect(
  ({ books }) => ({ books }),
)(BooksList);
