/*eslint-disable  jsx-a11y/anchor-is-valid */

import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchProducts } from "actions";
import ProductCard from "components/products/ProductCard";
import Spinner from "components/shared/Spinner";

class ProductPage extends Component {
  componentDidMount() {
    this.props.dispatch(fetchProducts());
  }

  render() {
    const { products, isFetching } = this.props;
    if (isFetching) {
      return (
        <p style={{ marginTop: "10%", marginLeft: "30%" }}>
          <Spinner />
          <h2 style={{ marginTop: "5px" }}>Loading...</h2>
        </p>
      );
    }
    return (
      <div className="all_products">
        <div className="all_products_body">
          <header className="products_header">Check out our animals</header>
          <div className="products">
            <ProductCard products={products} />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ products: { dataFetched, fetchingData } }) => {
  return {
    products: dataFetched,
    isFetching: fetchingData,
  };
};

export default connect(mapStateToProps)(ProductPage);
