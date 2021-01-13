import { extractServerError } from "actions";
import axiosService from "../services/AxiosServices";

const { AgricAxios } = axiosService;

// Products
export const fetchProducts = (category) => (dispatch) => {
  const query = category ? `/products?category=${category}` : "/products";
  dispatch({
    type: "REQUEST_DATA",
  });
  return AgricAxios.get(query)
    .then((res) => {
      dispatch({
        type: "REQUEST_DATA_COMPLETE",
        products: res.data,
        resource: "fetch-products",
      });
    })
    .catch(({ message }) => {
      dispatch({
        type: "REQUEST_DATA_FAILED",
        message,
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
  return AgricAxios.post("/products", productData)
    .then(({ data }) => data)
    .catch((error) => Promise.reject(extractServerError(error.response || [])));
};

// Product categories

export const fetchProductCategories = () => (dispatch) => {
  return AgricAxios.get("/product-categories").then((res) => {
    dispatch({
      type: "FETCHED_PRODUCT_CATEGORIES",
      categories: res.data,
      resource: "fetch-products",
    });
  });
};

export const createProductCategory = (categoryData) => {
  return AgricAxios.post("/product-categories", categoryData)
    .then(({ data }) => data)
    .catch((errors) => Promise.reject(extractServerError(errors.response)));
};
