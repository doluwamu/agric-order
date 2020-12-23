import React, { Component } from "react";
import LoginForm from "components/forms/LoginForm";
import { withAuth } from "services/AuthService";

class LoginPage extends Component {
  state = {
    shouldRedirect: false,
    error: [],
  };
  loginUser = (loginData) => {
    debugger;
    this.props.auth
      .signIn(loginData)
      .then((_) => {
        this.setState({ shouldRedirect: true });
      })
      .catch((error) => {
        return this.setState({ error });
      });
  };

  render() {
    const { error } = this.state;
    return (
      <div className="form-section">
        <LoginForm onSubmit={this.loginUser} error={error} />
      </div>
    );
  }
}

export default withAuth(LoginPage);
