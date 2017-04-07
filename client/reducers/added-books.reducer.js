const addedBooks = (state = 0, action) => {
  switch (action.type) {
    case 'SET_BOOK':
      return action.addedBooks;
    case 'ADD_BOOK':
      return state + 1;
    case 'REMOVE_BOOK':
      return state - 1;
    case 'RESET_BOOK':
      return 0;
    default:
      return state;
  }
};

export default addedBooks;
