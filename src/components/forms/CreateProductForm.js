import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { MinLength, RequiredField } from "helpers/FormMessage";
import { ServerError } from "errors/Server";
import { connect } from "react-redux";
import { fetchProductCategories } from "actions";
import { capitalize } from "helpers/Capitalize";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

// eslint-disable-next-line

const CreateProductForm = ({ onSubmit, error, categories, dispatch }) => {
  useEffect(() => {
    dispatch(fetchProductCategories());
  }, [dispatch]);

  const { register, errors, handleSubmit } = useForm();
  const nums = [4, 20];
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="login-form forms">
      <div className="form_header">
        <h2>Enter your new product details here</h2>
      </div>

      <div className="name form_part">
        <div className="form_label">
          <label>Product's name:</label>
        </div>
        <input
          ref={register({ required: true, minLength: nums[0] })}
          type="text"
          name="name"
          className="name_input"
          id="name"
          placeholder="Enter product's name..."
        />
        {errors.name && (
          <div className="alert alert-danger">
            {errors.name.type === "required" && <RequiredField />}
            {errors.name.type === "minLength" && <MinLength num={nums[0]} />}
          </div>
        )}
      </div>

      <div className="image form_part">
        <div className="form_label">
          <label>Image url:</label>
        </div>
        <input
          ref={register({ required: true })}
          type="text"
          name="image"
          className="image_input"
          id="image"
          placeholder="Enter product's image url..."
        />
        {errors.image && (
          <div className="alert alert-danger">
            {errors.image.type === "required" && <RequiredField />}
          </div>
        )}
      </div>

      <div className="category form_part">
        <div className="form_label">
          <label>Select product category:</label>
        </div>
        <select ref={register({ required: true })} name="category">
          {categories &&
            categories.map((category) => {
              return (
                <option key={category._id}>
                  {capitalize(category.categoryName)}
                </option>
              );
            })}
        </select>
        {errors.category && (
          <div className="alert alert-danger">
            {errors.category.type === "required" && <RequiredField />}
          </div>
        )}

        <div style={{ marginTop: "10px" }}>
          <Link
            to="/new-product-category"
            style={{ color: "blue", fontSize: "17px" }}
          >
            Add a new category
          </Link>
        </div>
      </div>

      <div className="price form_part">
        <div className="form_label">
          <label>Product's price:</label>
        </div>
        <input
          ref={register({ required: true })}
          type="number"
          name="price"
          className="price_input"
          id="price"
          min={1}
          placeholder="Enter product's price..."
        />
        {errors.price && (
          <div className="alert alert-danger">
            {errors.price.type === "required" && <RequiredField />}
          </div>
        )}
      </div>

      <div className="details form_part">
        <div className="form_label">
          <label>Product's detail:</label>
        </div>
        <textarea
          ref={register({
            required: true,
            minLength: nums[1],
          })}
          name="details"
          rows="6"
          id="details"
          placeholder="Give description of your product"
        ></textarea>
        {errors.details && (
          <div className="alert alert-danger">
            {errors.details.type === "required" && <RequiredField />}
            {errors.details.type === "minLength" && <MinLength num={nums[1]} />}
          </div>
        )}
      </div>

      <div className="image form_part">
        <div className="form_label">
          <label>Available quantity (optional):</label>
        </div>
        <input
          ref={register({ required: false })}
          type="number"
          min="1"
          name="quantityInStock"
          className="quantityInStock_input"
          id="image"
          placeholder="Enter quantity available..."
        />
      </div>

      <div className="form_checkbox">
        <input
          ref={register({ required: true })}
          type="checkbox"
          name="available"
          className="privacy_terms"
          id="available"
        />
        <span className="privacy">
          <label style={{ fontSize: "19px", textDecoration: "none" }}>
            Confirm product
          </label>
        </span>

        {errors.available && (
          <div className="alert alert-danger">
            {errors.available.type === "required" && <RequiredField />}
          </div>
        )}
      </div>

      <div className="form_button">
        <button type="submit" className="btn btn-secondary">
          Create
        </button>
      </div>

      <div className="form_part">
        <ServerError error={error} />
      </div>
    </form>
  );
};

const mapStateToProps = ({ productCategories: { categoriesFetched } }) => {
  return {
    categories: categoriesFetched,
  };
};

export default connect(mapStateToProps)(CreateProductForm);
