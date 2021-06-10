import React from "react";
import { RequiredField } from "helpers/FormMessage";
import { ServerError } from "errors/Server";
import { useForm } from "react-hook-form";

// eslint-disable-next-line

const NewProductCategoryForm = ({ onSubmit, error }) => {
  const { register, errors, handleSubmit } = useForm();
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="login-form forms">
      <div className="form_header">
        <h2>Create a new product category</h2>
      </div>

      <div className="category_name form_part">
        <div className="form_label">
          <label>Category Name:</label>
        </div>
        <input
          ref={register({ required: true })}
          type="text"
          name="categoryName"
          className="category_name_input"
          id="category_name"
          placeholder="Enter a name for the category..."
        />
        {errors.categoryName && (
          <div className="alert alert-danger">
            {errors.categoryName.type === "required" && <RequiredField />}
          </div>
        )}
      </div>

      <div className="category_type form_part">
        <div className="form_label">
          <label>Select category type:</label>
        </div>
        <select
          ref={register({ required: true })}
          name="categoryType"
          className="category_type_input"
          id="category_type"
        >
          <option value="">Select...</option>
          <option>Animal</option>
          <option>Plant</option>
          <option>Egg</option>
          <option>Machinery</option>
          <option>Other</option>
        </select>

        {errors.categoryType && (
          <div className="alert alert-danger">
            {errors.categoryType.type === "required" && <RequiredField />}
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

      <div
        style={{ marginTop: "-5px", lineHeight: "23px", fontSize: "17px" }}
      ></div>
    </form>
  );
};

export default NewProductCategoryForm;
