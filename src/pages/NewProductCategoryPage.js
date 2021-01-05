import React, { Component } from "react";
// import { Redirect } from "react-router-dom/cjs/react-router-dom.min";
import NewProductCategoryForm from "components/forms/NewProductCategoryForm";

class NewProductCategoryPage extends Component {
  // state = {
  //   shouldRedirect: false,
  //   error: [],
  // };
  createProductCategory = (categoryData) => {
    alert(JSON.stringify(categoryData));
    // this.props.auth
    //   .logIn(loginData)
    //   .then((_) => {
    //     this.setState({ shouldRedirect: true });
    //   })
    //   .catch((error) => {
    //     return this.setState({ error });
    //   });
  };

  render() {
    // const { error, shouldRedirect } = this.state;

    // if (shouldRedirect) {
    //   return <Redirect to={{ pathname: "/" }} />;
    // }

    return (
      <div className="form-section">
        <NewProductCategoryForm onSubmit={this.createProductCategory} />
      </div>
    );
  }
}

export default NewProductCategoryPage;
