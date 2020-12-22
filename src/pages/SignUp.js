import React, { Component } from "react";
import SignupForm from "components/forms/SignupForm";
import { userRegistration } from "actions";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";

class SignUp extends Component {
  registerUser = (loginData) => {
    this.props.dispatch(userRegistration(loginData));
  };
  render() {
    const { register } = this.props;
    if (register === "registered") {
      return <Redirect to={{ pathname: "/login" }} />;
    }
    return (
      <div className="form-section">
        <SignupForm onSubmit={this.registerUser} />
      </div>
    );
  }
}

const mapStateToProps = ({ register }) => {
  return {
    register,
  };
};

export default connect(mapStateToProps)(SignUp);
