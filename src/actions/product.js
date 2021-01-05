import { extractServerError } from "actions";
import axiosService from "../services/AxiosServices";

const { AgricAxios } = axiosService;

// Products
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

export const productCreate = (productData) => {
  debugger;
  return AgricAxios.post("/products", productData)
    .then(({ data }) => {
      debugger;
      return data;
    })
    .catch((error) => {
      debugger;
      return Promise.reject(extractServerError(error.response || []));
    });
};

// Product categories

export const fetchProductCategories = () => (dispatch) => {
  return AgricAxios.get("/product-categories").then((res) => {
    debugger;
    dispatch({
      type: "FETCHED_PRODUCT_CATEGORIES",
      categories: res.data,
      resource: "fetch-products",
    });
    debugger;
  });
};
