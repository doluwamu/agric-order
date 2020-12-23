const { combineReducers } = require("redux");

const initAuthReducer = () => {
  const isAuthenticated = (state = false, action) => {
    switch (action.type) {
      case "USER_LOGGED_IN":
        return true;
      case "USER_LOGGED_OUT":
        return false;
      default:
        return state;
    }
  };

  const username = (state = "", action) => {
    switch (action.type) {
      case "USER_LOGGED_IN":
        return action.username;
      case "USER_LOGGED_OUT":
        return "";
      default:
        return state;
    }
  };

  return combineReducers({
    isAuthenticated,
    username,
  });
};

const auth = initAuthReducer();

export default auth;
