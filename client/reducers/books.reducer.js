const book = (state, action) => {
  switch (action.type) {
    case 'TOGGLE_BOOK':
      if (state.id !== action.id) {
        return state;
      }
      return {
        ...state,
        added: !state.added,
      };
    case 'BUY_BOOKS':
      return {
        ...state,
        added: false
      };
    default:
      return state;
  }
};

const books = (state = [], action) => {
  switch (action.type) {
    case 'LOAD_BOOKS':
      return action.books;
    case 'TOGGLE_BOOK':
      return state.map(b => book(b, action));
    case 'BUY_BOOKS':
      return state.map(b => book(b, action));
    default:
      return state;
  }
};

export default books;

export const getBooks = (books, location) => {
  if (location && /\/books/.test(location.pathname)) {
    return books.filter(book => book.added === true);
  }
  return books;
};
