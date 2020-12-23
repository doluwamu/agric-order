import React, { Component } from "react";
import LoginForm from "components/forms/LoginForm";
import { withAuth } from "services/AuthService";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";

class LoginPage extends Component {
  state = {
    shouldRedirect: false,
    error: [],
  };
  loginUser = (loginData) => {
    this.props.auth
      .logIn(loginData)
      .then((_) => {
        this.setState({ shouldRedirect: true });
      })
      .catch((error) => {
        return this.setState({ error });
      });
  };

  render() {
    const { error, shouldRedirect } = this.state;

    if (shouldRedirect) {
      return <Redirect to={{ pathname: "/" }} />;
    }

    return (
      <div className="form-section">
        <LoginForm onSubmit={this.loginUser} error={error} />
      </div>
    );
  }
}

export default withAuth(LoginPage);
