const booksById = (state = {}, action) => {
  switch (action.type) {
    case 'LOAD_BOOK':
      state[action.id] = action.book;
      return state;
    case 'TOGGLE_BOOK':
      state[action.id] = {
        ...state[action.id],
        added: !state[action.id].added
      };
      return state;
    case 'BUY_BOOKS':
      return {};
    default:
      return state;
  }
};

export default booksById;
