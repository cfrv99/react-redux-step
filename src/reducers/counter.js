const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case "INCREMENT":
      return incrementFunction(state, action);
    case "DECREMENT":
      if (state === 0) return state;
      return state - action.payload;
    default:
      return state;
  }
};

const incrementFunction = (state, action) => {
  return state + action.payload;
};

export default counterReducer;
