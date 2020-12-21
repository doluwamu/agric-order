// import { combineReducers } from "redux";

// export const itemReducer = (state = [], action) => {
//   if (resource !== action.resource) {
//     return state;
//   }
//   switch (action.type) {
//     case "REQUEST_DATA":
//       return [];
//     case "REQUEST_DATA_COMPLETE":
//       return action.products;
//     default:
//       return state;
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
      case "REQUEST_DATA_COMPLETE":
        return false;
      default:
        return state;
    }
  };
};

// export const allReducers = () => {
//   const item = dataFetched(resource);
//   const isFetchingStatus = fetchingData(resource);

//   return combineReducers({
//     item,
//     isFetchingStatus,
//   });
// };

// const data = generalReducer();

// export default data;
