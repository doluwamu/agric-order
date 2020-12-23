const { combineReducers } = require("redux");

const initAuthReducer = () => {
  const isAuthenticated = (state = false, action) => {
    switch (action.type) {
      case "USER_LOGGED_IN":
        return true;
      default:
        return state;
    }
  };

  const username = (state = "", action) => {
    switch (action.type) {
      case "USER_LOGGED_IN":
        return action.username;
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
