import { ServerError } from "errors/Server";
import React from "react";
import { useForm } from "react-hook-form";
import { RequiredField } from "helpers/FormMessage";

// eslint-disable-next-line
const EMAIL_PATTERN = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const GetUserForm = ({ onSubmit, error }) => {
  const { register, errors, handleSubmit } = useForm();
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="login-form forms">
      <div className="form_header">
        <h2>Provide your Email</h2>
      </div>

      <div className="email form_part">
        <div className="form_label">
          <label>Email:</label>
        </div>
        <input
          ref={register({ required: true, pattern: EMAIL_PATTERN })}
          type="email"
          name="email"
          className="email_input"
          id="email"
          placeholder="Write in your email..."
        />
        {errors.email && (
          <div className="alert alert-danger">
            {errors.email.type === "required" && <RequiredField />}
            {errors.email.type === "pattern" && (
              <span>Invalid email format!</span>
            )}
          </div>
        )}
      </div>

      <div className="form_button">
        <button type="submit" className="btn btn-secondary">
          Submit
        </button>
      </div>

      <div className="form_part">
        <ServerError error={error} />
      </div>
    </form>
  );
};

export default GetUserForm;
