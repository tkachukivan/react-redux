const inSt = [
  {
    id: '58e3f73ff36d281a995cf106',
    name: 'The Lightning Thief',
    author: 'Rick Riordan',
    series: 'Percy Jackson and the Olympians',
    genre: 'fantasy',
    inStock: true,
    price: 12.5,
    added: false
  },
  {
    id: '59e3f73ff36d281a995cf106',
    name: 'The Lightning Thief',
    author: 'Rick Riordan',
    series: 'Percy Jackson and the Olympians',
    genre: 'fantasy',
    inStock: true,
    price: 12.5,
    added: false
  }
];

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

const books = (state = inSt, action) => {
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
