const product = (state = {}, action) => {
  switch (action.type) {
    case "FETCH_PRODUCT_BY_ID":
      return action.product;
    default:
      return state;
  }
};

export default product;
