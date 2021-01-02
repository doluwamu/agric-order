import React, { Component } from "react";
import SignupForm from "components/forms/SignupForm";
import { userRegistration } from "actions";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";

class SignUp extends Component {
  state = {
    shouldRedirect: false,
    error: [],
  };
  registerUser = (loginData) => {
    userRegistration(loginData)
      .then(() => this.setState({ shouldRedirect: true }))
      .catch((error) => this.setState({ error }));
  };
  render() {
    const { shouldRedirect, error } = this.state;
    if (shouldRedirect) {
      return <Redirect to={{ pathname: "/login" }} />;
    }
    return (
      <div className="form-section">
        <SignupForm onSubmit={this.registerUser} error={error} />
      </div>
    );
  }
}

export default SignUp;
