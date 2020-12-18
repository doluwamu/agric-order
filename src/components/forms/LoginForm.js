import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

// eslint-disable-next-line
const EMAIL_PATTERN = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const LoginForm = ({ onSubmit }) => {
  const { register, errors, handleSubmit } = useForm();
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="login-form forms">
      <div className="form_header">
        <h2>Log-In</h2>
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
            {errors.email.type === "required" && (
              <span>Please provide an email!</span>
            )}
            {errors.email.type === "pattern" && (
              <span>Invalid email format!</span>
            )}
          </div>
        )}
      </div>

      <div className="password form_part">
        <div className="form_label">
          <label>Password:</label>
        </div>
        <input
          ref={register({ required: true, minLength: 8 })}
          type="password"
          name="password"
          className="password_input"
          id="password"
          placeholder="Write in your password..."
        />
        {errors.password && (
          <div className="alert alert-danger">
            {errors.password.type === "required" && (
              <span>Please provide a password!</span>
            )}
            {errors.password.type === "minLength" && (
              <span>Password must be at least 8 characters!</span>
            )}
          </div>
        )}
      </div>

      <div className="form_button">
        <button type="submit" className="btn btn-secondary">
          log-in
        </button>
      </div>

      <div>
        <p style={{ marginTop: "2rem", fontSize: "19px" }}>
          Don't have an account?{" "}
          <Link to="/signup" style={{ color: "blue" }}>
            Sign up
          </Link>
        </p>
      </div>
    </form>
  );
};

export default LoginForm;
