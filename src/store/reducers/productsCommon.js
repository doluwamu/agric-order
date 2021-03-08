// const checkResource = (state, action, resource) => {
//   if (resource !== action.resource) {
//     return state;
//   }
// };

export const fetchingReducer = (resource) => {
  return (state = false, action) => {
    if (resource !== action.resource) {
      return state;
    }
    switch (action.type) {
      case "REQUEST_DATA":
        return true;
      case "REQUEST_DATA_FAILED":
      case "REQUEST_DATA_COMPLETE":
        return false;
      default:
        return state;
    }
  };
};

export const fetchingFailReducer = (resource) => {
  return (state = [], action) => {
    if (resource !== action.resource) {
      return state;
    }
    switch (action.type) {
      case "REQUEST_DATA":
        return [];
      case "REQUEST_DATA_FAILED":
        return action.message;
      default:
        return state;
    }
  };
};

export const fetchingSuccessReducer = (resource) => {
  return (state = [], action) => {
    if (resource !== action.resource) {
      return state;
    }
    switch (action.type) {
      case "REQUEST_DATA":
        return [];
      case "REQUEST_DATA_COMPLETE":
        return action.data;
      case "FETCHED_PRODUCT_CATEGORIES":
        return action.categories;
      default:
        return state;
    }
  };
};
