import { getUserByEmail } from "actions";
import GetUserForm from "components/forms/GetUserForm";
import React, { Component } from "react";

class GetUserPage extends Component {
  state = {
    shouldRedirect: false,
    error: [],
  };

  getUser = (userData) => {
    getUserByEmail(userData)
      .then((_) => {
        return this.setState({ shouldRedirect: true });
      })
      .catch((error) => this.setState({ error }));
  };

  componentDidUpdate() {
    const { shouldRedirect } = this.state;

    if (shouldRedirect) {
      this.props.history.push("/reset-password");
    }
  }

  render() {
    const { error } = this.state;

    return (
      <div className="form-section">
        <GetUserForm onSubmit={this.getUser} error={error} />
      </div>
    );
  }
}

export default GetUserPage;
