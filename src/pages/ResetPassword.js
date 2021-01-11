import React, { Component } from "react";
import ResetPasswordForm from "components/forms/ResetPasswordForm";
import { PasswordReset } from "actions";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";

class ResetPassword extends Component {
  state = {
    shouldRedirect: false,
    error: [],
  };
  resetPassword = (resetData) => {
    const id = sessionStorage.getItem("user_id");
    const userId = id ? id : "";
    PasswordReset(resetData, userId)
      .then((_) => {
        sessionStorage.removeItem("user_id");
        return this.setState({ shouldRedirect: true });
      })
      .catch((error) => this.setState({ error }));
  };
  render() {
    const { shouldRedirect, error } = this.state;
    if (shouldRedirect) {
      return <Redirect to={{ pathname: "/login" }} />;
    }
    return (
      <div className="form-section">
        <ResetPasswordForm onSubmit={this.resetPassword} error={error} />
      </div>
    );
  }
}

export default ResetPassword;
