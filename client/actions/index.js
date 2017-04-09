import * as actions from './actions';

export const loadBooks = () => (dispatch, getState) => {
  if (getState().books.length > 0) {
    return;
  }

  dispatch(actions.toggleLoader());
  fetch('/api/books')
    .then(response => response.json())
    .then(({ booksArray, addedBooks, pricesSum }) => {
      dispatch(actions.loadBooks(booksArray));
      dispatch(actions.setAddedBook(addedBooks));
      dispatch(actions.setPricesSum(pricesSum));
      dispatch(actions.toggleLoader());
    });
};

export const loadBookById = (id, push) => (dispatch) => {
  dispatch(actions.toggleLoader());
  fetch(`/api/book/${id}`)
    .then(res => res.json())
    .then(({ bookById, addedBooks, not_found }) => {
      if (not_found) {
        dispatch(actions.toggleLoader());
        push('/not-found');
        return;
      }
      dispatch(actions.loadBookById(id, bookById));
      dispatch(actions.setAddedBook(addedBooks));
      dispatch(actions.toggleLoader());
    });
};

export const toggleBook = id => (dispatch, getState) => {
  const price = getState().booksById[id].price;
  dispatch(actions.toggleLoader());
  fetch(`/api/book/${id}`, {
    method: 'PUT'
  }).then(res => res.json())
    .then(({ type }) => {
      dispatch(actions.toggleBook(id));
      if (type === 'add') {
        dispatch(actions.addToAddedBook());
        dispatch(actions.increasePricesSum(price));
      } else {
        dispatch(actions.removeFromAddedBook());
        dispatch(actions.decreasePricesSum(price));
      }
      dispatch(actions.toggleLoader());
    });
};

export const buy = setState => (dispatch) => {
  dispatch(actions.toggleLoader());
  fetch('/api/buy', {
    method: 'POST'
  }).then(res => res.json())
    .then(({ pricesSum }) => {
      dispatch(actions.setPricesSum(pricesSum));
      dispatch(actions.toggleLoader());
      setState({
        showBuy: true
      });
    });
};

export const confirmBuy = (setState, push) => (dispatch) => {
  setState({
    showBuy: false
  });
  push('/');
  dispatch(actions.resetAddedBook());
  dispatch(actions.resetPricesSum());
  dispatch(actions.buyBooks());
};
