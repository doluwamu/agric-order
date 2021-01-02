import React, { Component } from "react";
// import { Redirect } from "react-router-dom/cjs/react-router-dom.min";

class CreateProductPage extends Component {
  //   state = {
  //     shouldRedirect: false,
  //     error: [],
  //   };

  // componentDidMount() {
  //   this.props.dispatch({
  //     type: "REQUEST_DATA",
  //   });
  // }
  //   createProduct = (productData) => {
  //     JSON.stringify(productData);
  //     // userRegistration(loginData)
  //     //   .then(() => this.setState({ shouldRedirect: true }))
  //     //   .catch((error) => this.setState({ error }));
  //   };
  render() {
    // const { shouldRedirect, error } = this.state;
    // if (shouldRedirect) {
    //   return <Redirect to={{ pathname: "/login" }} />;
    // }
    console.log(this.props);
    return (
      <div className="form-section">
        hello world
        {/* <SignupForm onSubmit={this.createProduct} error={error} /> */}
      </div>
    );
  }
}

export default CreateProductPage;
