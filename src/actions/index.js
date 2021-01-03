export const extractServerError = (serverError) => {
  let errors = [{ title: "Error!", detail: "Ooops, something went wrong!" }];
  if (serverError && serverError.data && serverError.data.errors) {
    errors = serverError.data.errors;
  }
  return errors;
};

// Products
export * from "./products";

// Cart
export * from "./cart";

// Authentication
export * from "./auth";
