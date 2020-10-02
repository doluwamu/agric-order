import React, { Component } from "react";
import LoginForm from "components/forms/LoginForm";

class LoginPage extends Component {
  loginUser = (loginData) => {
    alert(JSON.stringify(loginData));
  };

  render() {
    return (
      <div className="form-section">
        <LoginForm onSubmit={this.loginUser} />
      </div>
    );
  }
}

export default LoginPage;
