import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { getBooks } from '../../reducers/';
import { loadBooks, buy, confirmBuy } from '../../actions';
import BookItem from '../../components/book-list-item';
import Buy from '../../components/buy';


class BooksList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showBuy: false
    };
  }
  componentDidMount() {
    this.loadBooks();
  }

  loadBooks() {
    const { loadBooks } = this.props;
    loadBooks();
  }

  buy() {
    const { buy } = this.props;
    buy(this.setState.bind(this));
  }

  confirmBuy() {
    const { confirmBuy, router } = this.props;
    return () => confirmBuy(this.setState.bind(this), router.push);
  }

  render() {
    const { books, pricesSum, location } = this.props;
    const booksList = books.map(book => (
      <li key={book.id}>
        <BookItem book={book} />
      </li>
      )
    );

    return (
      <div className="books-list-wrapper">
        <ul className="books-list">
          {booksList}
        </ul>
        {
          location && location.pathname === '/books' && books.length > 0 && (
            <div>
              <p className="books-list__price">
                Your Books cost: {pricesSum}$
              </p>
              <button className="button books-list__buy-button" onClick={() => this.buy()}>
                buy books
              </button>
            </div>
          )
        }
        {
          this.state.showBuy && <Buy confirm={this.confirmBuy()} />
        }
      </div>
    );
  }
}

BooksList.defaultProps = {
  location: {},
  router: {}
};

BooksList.propTypes = {
  books: PropTypes.arrayOf(React.PropTypes.object).isRequired,
  pricesSum: PropTypes.number.isRequired,
  router: PropTypes.object,
  location: PropTypes.object,
  loadBooks: PropTypes.func,
  buy: PropTypes.func,
  confirmBuy: PropTypes.func
};

const mapStateToProps = (state, { location }) => ({
  books: getBooks(state, location),
  pricesSum: state.pricesSum
});

export default connect(
  mapStateToProps,
  {
    loadBooks,
    buy,
    confirmBuy
  }
)(BooksList);
