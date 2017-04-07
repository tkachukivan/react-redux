import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import NotFound from '../not-found';
import { toggleBook } from '../../actions/actions';

const BookPage = ({ books, params, toggleBook }) => {
  const book = books.find(b => b.id === params.id);

  if (!book) {
    return <NotFound />;
  }

  let button = null;

  if (book.added) {
    button = <button className="button button_remove" onClick={() => toggleBook(book.id)}>remove</button>;
  } else {
    button = <button className="button" onClick={() => toggleBook(book.id)}>add to my books</button>;
  }

  return (
    <div className="book-page">
      <h2 className="book-page__name">
        {book.name}
      </h2>
      <div className="book-page-info-wrapper">
        <div>
          { book.series && (
            <p className="book-page__series"><span>Series:</span>{book.series}</p>
          )
          }
          <p className="book-page__author"><span>Author:</span>{book.author}</p>
          <p className="book-page__genre"><span>Genre:</span>{book.genre}</p>
          <p className="book-page__price"><span>Price:</span>{book.price}$</p>
        </div>
        <div>
          { book.inStock ? button : (
            <p className="book-page__not">
              {"Sorry, now we don't have this book in our stock"}
            </p>)
          }
        </div>
      </div>
    </div>
  );
};


BookPage.propTypes = {
  books: PropTypes.arrayOf(React.PropTypes.object).isRequired,
  params: PropTypes.object.isRequired,
  toggleBook: PropTypes.func.isRequired
};

const mapDispatchToProps = dispatch => ({
  toggleBook: (id) => {
    dispatch(toggleBook(id));
  },
});

export default connect(
  ({ books }) => ({ books }),
  mapDispatchToProps
)(BookPage);
