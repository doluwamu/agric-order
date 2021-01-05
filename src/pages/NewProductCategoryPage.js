import React, { Component } from "react";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";
import NewProductCategoryForm from "components/forms/NewProductCategoryForm";
import { createProductCategory } from "actions";

class NewProductCategoryPage extends Component {
  state = {
    shouldRedirect: false,
    error: [],
  };
  productCategoryCreate = (categoryData) => {
    createProductCategory(categoryData)
      .then((_) => this.setState({ shouldRedirect: true }))
      .catch((error) => this.setState({ error }));
  };

  render() {
    const { error, shouldRedirect } = this.state;

    if (shouldRedirect) {
      return <Redirect to={{ pathname: "/product-create" }} />;
    }

    return (
      <div className="form-section">
        <NewProductCategoryForm
          onSubmit={this.productCategoryCreate}
          error={error}
        />
      </div>
    );
  }
}

export default NewProductCategoryPage;
