import { routerReducer as routing } from 'react-router-redux';
import { combineReducers } from 'redux';
import books from './books.reducer';
import addedBooks from './added-books.reducer';
import loader from './loading.reducer';
import pricesSum from './prices-sum.reducer';

export default combineReducers({
  routing,
  books,
  addedBooks,
  loader,
  pricesSum
});
