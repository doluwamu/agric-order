import { ServerError } from "errors/Server";
import { MinLength, RequiredField } from "helpers/FormMessage";
import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

// eslint-disable-next-line
const EMAIL_PATTERN = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const LoginForm = ({ onSubmit, error }) => {
  const { register, errors, handleSubmit } = useForm();
  const num = [8];
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="login-form forms">
      <div className="form_header">
        <h2>Login</h2>
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

      <div className="password form_part">
        <div className="form_label">
          <label>Password:</label>
        </div>
        <input
          ref={register({ required: true, minLength: num[0] })}
          type="password"
          name="password"
          className="password_input"
          id="password"
          placeholder="Write in your password..."
        />
        {errors.password && (
          <div className="alert alert-danger">
            {errors.password.type === "required" && <RequiredField />}
            {errors.password.type === "minLength" && <MinLength num={num[0]} />}
          </div>
        )}
      </div>

      <div className="form_button">
        <button type="submit" className="btn btn-secondary">
          Login
        </button>
      </div>

      <div>
        <p
          style={{ fontSize: "16px", marginLeft: "15px", marginTop: "1.5rem" }}
        >
          <Link
            to="/get-user"
            style={{ color: "blue", textDecoration: "none" }}
          >
            Forgot password?
          </Link>
        </p>
      </div>

      <div className="form_part">
        <ServerError error={error} />
      </div>

      <div>
        <p style={{ fontSize: "19px" }}>
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
