export const toggleLoader = () => ({
  type: 'TOGGLE_LOADER',
});

export const toggleBook = id => ({
  type: 'TOGGLE_BOOK',
  id
});

export const addToAddedBook = () => ({
  type: 'ADD_BOOK',
});

export const removeFromAddedBook = () => ({
  type: 'REMOVE_BOOK',
});

export const resetAddedBook = () => ({
  type: 'RESET_BOOK',
});

export const setAddedBook = addedBooks => ({
  type: 'SET_BOOK',
  addedBooks
});

export const setPricesSum = sum => ({
  type: 'SET_PRICES_SUM',
  sum
});

export const resetPricesSum = () => ({
  type: 'RESET_PRICES_SUM',
});

export const increasePricesSum = price => ({
  type: 'INCREASE_PRICES_SUM',
  price
});

export const decreasePricesSum = price => ({
  type: 'DECREASE_PRICES_SUM',
  price
});

export const buyBooks = () => ({
  type: 'BUY_BOOKS',
});

export const loadBookById = (id, book) => ({
  type: 'LOAD_BOOK',
  id,
  book
});

export const loadBooks = books => ({
  type: 'LOAD_BOOKS',
  books
});
