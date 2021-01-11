import { getUserByEmail } from "actions";
import GetUserForm from "components/forms/GetUserForm";
import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";

class GetUserPage extends Component {
  state = {
    shouldRedirect: false,
    error: [],
  };

  getUser = (userData) => {
    getUserByEmail(userData)
      .then((_) => this.setState({ shouldRedirect: true }))
      .catch((error) => this.setState({ error }));
  };

  render() {
    const { error, shouldRedirect } = this.state;

    if (shouldRedirect) {
      return <Redirect to={{ pathname: "/reset-password" }} />;
    }

    return (
      <div className="form-section">
        <GetUserForm onSubmit={this.getUser} error={error} />
      </div>
    );
  }
}

export default connect()(GetUserPage);
