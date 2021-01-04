import React from "react";
import { useForm } from "react-hook-form";
// import { sameAs } from "helpers/validators";
import { MinLength, RequiredField } from "helpers/FormMessage";
import { ServerError } from "errors/Server";
// import { ServerError } from "errors/Server";

// eslint-disable-next-line

const CreateProductForm = ({ onSubmit, error }) => {
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
          <label>Product category:</label>
        </div>
        <select
          ref={register({ required: true })}
          name="category"
          // style={{ width: "20%", minHeight: '' }}
        >
          <option>Select a category</option>
          <option>Cattle</option>
          <option>Pig</option>
          <option>Dog</option>
          <option>Sheep</option>
          <option>Goat</option>
          <option>Poultry</option>
          <option>Fish</option>
          <option>Furits</option>
          <option>Vegetable</option>
        </select>
        {errors.category && (
          <div className="alert alert-danger">
            {errors.category.type === "required" && <RequiredField />}
          </div>
        )}
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
            Confirm that product is available
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

export default CreateProductForm;
