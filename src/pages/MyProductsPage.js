/*eslint-disable  jsx-a11y/anchor-is-valid */

import React, { Component } from "react";
import { connect } from "react-redux";
import { getUserProducts } from "actions";
import ProductCard from "components/products/ProductCard";

import Loading from "helpers/Loading";
import ConnectionError from "errors/ConnectionError";
import HeadImage from "components/shared/HeadImage";

class MyProductsPage extends Component {
  componentDidMount() {
    this.props.dispatch(getUserProducts());
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
      <>
        <HeadImage heading={"We hope you enjoy shopping with us"} />
        <div className="all_products">
          <div className="all_products_body">
            <header className="products_header">My Products</header>
            <div className="products">
              <ProductCard products={products} dispatch={this.props.dispatch} />
            </div>
          </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = ({ manage: { products } }) => {
  debugger;
  return {
    isFetching: products.isFetching,
    products: products.items,
    dataFetchingFail: products.errors,
  };
};

export default connect(mapStateToProps)(MyProductsPage);
