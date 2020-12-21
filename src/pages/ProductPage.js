/*eslint-disable  jsx-a11y/anchor-is-valid */

import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchProducts } from "actions";
import ProductCard from "components/products/ProductCard";

class ProductPage extends Component {
  componentDidMount() {
    this.props.dispatch(fetchProducts());
  }

  render() {
    const { products, isFetching } = this.props;
    if (isFetching) {
      return (
        <h2 style={{ fontSize: "25px", marginTop: "10%", marginLeft: "30%" }}>
          Loading...
        </h2>
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
