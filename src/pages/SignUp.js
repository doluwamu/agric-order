import React, { Component } from "react";
import SignupForm from "components/forms/SignupForm";
import { userRegistration } from "actions";
// import { connect } from "react-redux";
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
    // console.log(error[0].title);
    if (shouldRedirect) {
      return <Redirect to={{ pathname: "/login" }} />;
    }
    return (
      <div className="form-section">
        <SignupForm onSubmit={this.registerUser} />
        {error &&
          error.length > 0 &&
          error.map((e) => {
            return (
              <div className="alert alert-danger" key={e.title}>
                <span>{e.detail}</span>
              </div>
            );
          })}
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
