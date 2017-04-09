import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { loadBookById, toggleBook } from '../../actions';

class BookPage extends Component {
  componentDidMount() {
    if (!this.props.book.name) {
      this.loadBookById();
    }
  }

  loadBookById() {
    const { loadBookById, params, router } = this.props;
    loadBookById(params.id, router.push);
  }

  toggleBook() {
    const { toggleBook, params } = this.props;
    toggleBook(params.id);
  }

  render() {
    const { book } = this.props;

    let button = null;

    if (book.added) {
      button = (<button
        className="button button_remove"
        onClick={() => this.toggleBook()}
      >
        remove
      </button>);
    } else {
      button = (<button
        className="button"
        onClick={() => this.toggleBook()}
      >
        add to my books
      </button>);
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
  }
}


BookPage.propTypes = {
  book: PropTypes.object.isRequired,
  params: PropTypes.object.isRequired,
  loadBookById: PropTypes.func,
  router: PropTypes.object,
  toggleBook: PropTypes.func
};

const mapStateToProps = ({ booksById }, { params }) => ({
  book: booksById[params.id] || {}
});

export default connect(
  mapStateToProps,
  { loadBookById,
    toggleBook
  }
)(BookPage);
