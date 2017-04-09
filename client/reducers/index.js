import { routerReducer as routing } from 'react-router-redux';
import { combineReducers } from 'redux';
import books, * as fromBooks from './books.reducer';
import addedBooks from './added-books.reducer';
import loader from './loading.reducer';
import pricesSum from './prices-sum.reducer';
import booksById from './books-by-id';

export default combineReducers({
  routing,
  books,
  booksById,
  addedBooks,
  loader,
  pricesSum
});

export const getBooks = (state, location) => fromBooks.getBooks(state.books, location);
