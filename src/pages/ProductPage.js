/*eslint-disable  jsx-a11y/anchor-is-valid */

import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchProducts } from "actions";
import Loading from "helpers/Loading";
import ConnectionError from "errors/ConnectionError";
import HeadImage from "components/shared/HeadImage";
import ProductsDisplay from "components/productDisplay/ProductsDisplay";

class ProductPage extends Component {
  componentDidMount() {
    // window.scrollTo(500, 0);
    this.props.dispatch(fetchProducts());
  }

  render() {
    const { products, isFetching, dataFetchingFail, productLike } = this.props;

    if (isFetching) {
      return <Loading />;
    }

    if (dataFetchingFail && dataFetchingFail.length > 0) {
      return <ConnectionError />;
    }

    return (
      products && products.length > 0 ?
      <>
        <HeadImage heading={"We hope you enjoy shopping with us"} />
        <ProductsDisplay
          products={products}
          dispatch={this.props.dispatch}
          productLike={productLike}
        />
      </>
    :
    <h2>No product added yet</h2>
    );
  }
}

const mapStateToProps = ({
  products: { allProducts },
  likeProduct: { likeProductSuccess },
}) => {
  return {
    isFetching: allProducts.isFetching,
    products: allProducts.items,
    dataFetchingFail: allProducts.errors,
    productLike: likeProductSuccess,
  };
};

export default connect(mapStateToProps)(ProductPage);
