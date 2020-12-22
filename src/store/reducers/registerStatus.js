const register = (state = "", action) => {
  switch (action.type) {
    case "USER_REGISTERED":
      return action.status;
    default:
      return state;
  }
};

export default register;
