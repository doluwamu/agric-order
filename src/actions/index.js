import axiosService from "../services/AxiosServices";
import { productData } from "data";

const { AgricAxios } = axiosService;

const extractServerError = (serverError) => {
  let errors = [{ title: "Error!", detail: "Ooops, something went wrong!" }];
  if (serverError && serverError.data && serverError.data.errors) {
    errors = serverError.data.errors;
  }
  return errors;
};

export const fetchProducts = () => (dispatch) => {
  dispatch({
    type: "REQUEST_DATA",
  });
  return AgricAxios.get("/products").then((res) => {
    dispatch({
      type: "REQUEST_DATA_COMPLETE",
      products: res.data,
      resource: "fetch-products",
    });
  });
};

export const fetchProductById = (productId) => (dispatch) => {
  dispatch({
    type: "REQUEST_PRODUCT",
  });

  return AgricAxios.get(`/products/${productId}`).then((res) => {
    dispatch({
      type: "REQUEST_PRODUCT_COMPLETE",
      data: res.data,
      resource: "fetch-product-by-id",
    });
  });
};

export const addToCart = (productId, qty) => (dispatch) => {
  const data = productData.find((product) => product._id === productId);

  dispatch({
    type: "ADD_ITEM_TO_CART",
    cart: {
      product: data._id,
      name: data.name,
      image: data.image,
      price: data.price,
      quantityInStock: data.quantityInStock,
      qty,
    },
  });
};

export const removeFromCart = (productId) => (dispatch) => {
  dispatch({
    type: "REMOVE_CART_ITEM",
    product: productId,
  });
};

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
