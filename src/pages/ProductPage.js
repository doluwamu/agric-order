/*eslint-disable  jsx-a11y/anchor-is-valid */

import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchProducts } from "actions";
import ProductCard from "components/products/ProductCard";

import Loading from "helpers/Loading";
import ConnectionError from "errors/ConnectionError";

class ProductPage extends Component {
  componentDidMount() {
    this.props.dispatch(fetchProducts());
  }

  render() {
    const { products, isFetching, dataFetchingFail } = this.props;
    if (isFetching) {
      return <Loading />;
    }

    if (dataFetchingFail && dataFetchingFail.length > 0) {
      return <ConnectionError />;
    }

    return (
      <div className="all_products">
        <div className="all_products_body">
          <header className="products_header">Check out our animals</header>
          <header
            className="products_header"
            style={{ fontSize: "20px", fontWeight: "bold" }}
          >
            Click on desired product to continue shopping
          </header>
          <div className="products">
            <ProductCard products={products} />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({
  products: { dataFetched, fetchingData, dataFetchingFail },
}) => {
  // debugger;
  return {
    isFetching: fetchingData,
    products: dataFetched,
    dataFetchingFail,
  };
};

export default connect(mapStateToProps)(ProductPage);
