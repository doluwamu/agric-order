import React, { Component } from "react";
import SignupForm from "components/forms/SignupForm";
import { userRegistration } from "actions";
// import { connect } from "react-redux";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";
import { ServerError } from "errors/Server";

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
        <SignupForm onSubmit={this.registerUser} />
        <ServerError error={error} />
      </div>
    );
  }
}

// const mapStateToProps = ({ register }) => {
//   return {
//     register,
//   };
// };

export default SignUp;
