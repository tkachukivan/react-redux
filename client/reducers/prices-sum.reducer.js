const pricesSum = (state = 0, action) => {
  switch (action.type) {
    case 'SET_PRICES_SUM':
      if (state === action.sum) {
        return state;
      }
      return action.sum;
    case 'RESET_PRICES_SUM':
      return 0;
    case 'INCREASE_PRICES_SUM':
      return state + action.price;
    case 'DECREASE_PRICES_SUM':
      return state - action.price;
    default:
      return state;
  }
};

export default pricesSum;
