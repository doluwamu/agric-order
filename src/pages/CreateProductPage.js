import React, { Component } from "react";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";
import CreateProductForm from "components/forms/CreateProductForm";
import { productCreate } from "actions";

class CreateProductPage extends Component {
  state = {
    shouldRedirect: false,
    error: [],
  };

  createProduct = (productData) => {
    productCreate(productData)
      .then(() => this.setState({ shouldRedirect: true }))
      .catch((error) => this.setState({ error }));
  };
  render() {
    const { shouldRedirect, error } = this.state;
    if (shouldRedirect) {
      return <Redirect to={{ pathname: "/" }} />;
    }
    console.log(this.props);
    return (
      <div className="form-section">
        <CreateProductForm onSubmit={this.createProduct} error={error} />
      </div>
    );
  }
}

export default CreateProductPage;
