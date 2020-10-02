import React, { Component } from "react";
import SignupForm from "components/forms/SignupForm";

class SignUp extends Component {
  registerUser = (loginData) => {
    alert(JSON.stringify(loginData));
  };
  render() {
    return (
      <div className="form-section">
        <SignupForm onSubmit={this.registerUser} />
      </div>
    );
  }
}

export default SignUp;
