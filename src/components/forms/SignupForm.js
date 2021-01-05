import React from "react";
import { useForm } from "react-hook-form";
import { sameAs } from "helpers/validators";
import { Link } from "react-router-dom";
import { ServerError } from "errors/Server";
import { MinLength, RequiredField } from "helpers/FormMessage";

// eslint-disable-next-line
const EMAIL_PATTERN = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const SignupForm = ({ onSubmit, error }) => {
  const { register, errors, handleSubmit, getValues } = useForm();
  const num = [8];
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="login-form forms">
      <div className="form_header">
        <h2>Sign-Up</h2>
      </div>

      <div className="username form_part">
        <div className="form_label">
          <label>Username:</label>
        </div>
        <input
          ref={register({ required: true })}
          type="text"
          name="username"
          className="username_input"
          id="username"
          placeholder="Write in your username..."
        />
        {errors.username && (
          <div className="alert alert-danger">
            {errors.username.type === "required" && <RequiredField />}
          </div>
        )}
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

      <div className="password_confirmation form_part">
        <div className="form_label">
          <label>Confirm password:</label>
        </div>
        <input
          ref={register({
            required: true,
            minLength: num[0],
            validate: { sameAs: sameAs("password", getValues) },
          })}
          type="password"
          name="passwordConfirmation"
          className="password_confirmation_input"
          id="passwordConfirmation"
          placeholder="Confirm your password..."
        />
        {errors.passwordConfirmation && (
          <div className="alert alert-danger">
            {errors.passwordConfirmation.type === "required" && (
              <RequiredField />
            )}
            {errors.passwordConfirmation.type === "minLength" && (
              <MinLength num={num[0]} />
            )}
            {errors.passwordConfirmation.type === "sameAs" && (
              <span>Password confirmation must match password!</span>
            )}
          </div>
        )}
      </div>

      <div className="form_checkbox">
        <input
          ref={register({ required: true })}
          type="checkbox"
          name="acceptedPrivacyTerms"
          className="privacy_terms"
          id="acceptedPrivacyTerms"
        />
        <span className="privacy">
          <label style={{ fontSize: "19px", textDecoration: "none" }}>
            To continue, accept our{" "}
            <Link to={"/"} style={{ color: "blue" }}>
              privacy terms and conditions
            </Link>
          </label>
        </span>

        {errors.acceptedPrivacyTerms && (
          <div className="alert alert-danger">
            {errors.acceptedPrivacyTerms.type === "required" && (
              <RequiredField />
            )}
          </div>
        )}
      </div>

      <div className="form_button">
        <button type="submit" className="btn btn-secondary">
          Sign up
        </button>
      </div>

      <div className="form_part">
        <ServerError error={error} />
      </div>

      <div>
        <p style={{ fontSize: "19px" }}>
          Already have an account?{" "}
          <Link to="/login" style={{ color: "blue" }}>
            Login
          </Link>
        </p>
      </div>
    </form>
  );
};

export default SignupForm;
