import React from "react";
import { useForm } from "react-hook-form";
import { sameAs } from "helpers/validators";
import { ServerError } from "errors/Server";
import { MinLength, RequiredField } from "helpers/FormMessage";

// eslint-disable-next-line

const ResetPasswordForm = ({ onSubmit, error }) => {
  const { register, errors, handleSubmit, getValues } = useForm();
  const num = [8];
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="login-form forms">
      <div className="form_header">
        <h2>Create your new password</h2>
      </div>

      <div className="password form_part">
        <div className="form_label">
          <label>New password:</label>
        </div>
        <input
          ref={register({ required: true, minLength: num[0] })}
          type="password"
          name="newPassword"
          className="password_input"
          id="newPassword"
          placeholder="Write in your password..."
        />
        {errors.newPassword && (
          <div className="alert alert-danger">
            {errors.newPassword.type === "required" && <RequiredField />}
            {errors.newPassword.type === "minLength" && (
              <MinLength num={num[0]} />
            )}
          </div>
        )}
      </div>

      <div className="password_confirmation form_part">
        <div className="form_label">
          <label>Confirm your new password:</label>
        </div>
        <input
          ref={register({
            required: true,
            minLength: num[0],
            validate: { sameAs: sameAs("newPassword", getValues) },
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

      <div className="form_button">
        <button type="submit" className="btn btn-secondary">
          Reset
        </button>
      </div>

      <div className="form_part">
        <ServerError error={error} />
      </div>
    </form>
  );
};

export default ResetPasswordForm;
