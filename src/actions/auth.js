import { extractServerError } from "actions";
import axiosService from "../services/AxiosServices";

const { AgricAxios } = axiosService;

// AUTHENTICATION
export const userRegistration = (registrationData) => {
  return AgricAxios.post("/users/register", registrationData)
    .then(({ data }) => data)
    .catch((errors) =>
      Promise.reject(extractServerError(errors.response) || [])
    );
};

export const userLogin = (loginData) => {
  return AgricAxios.post("/users/login", loginData)
    .then(({ data }) => data)
    .catch((errors) =>
      Promise.reject(extractServerError(errors.response) || [])
    );
};

export const userLoggedIn = (decodedToken) => (dispatch) => {
  dispatch({
    type: "USER_LOGGED_IN",
    username: decodedToken.username || "",
  });
};
