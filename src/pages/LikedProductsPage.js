/*eslint-disable  jsx-a11y/anchor-is-valid */

import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchProducts } from "actions";
import Loading from "helpers/Loading";
import ConnectionError from "errors/ConnectionError";
import LikedProductCard from "components/products/LikedProductCard";

class LikedProductPage extends Component {
  componentDidMount() {
    window.scrollTo(500, 0);
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
      <>
        <div className="all_products">
          <div className="all_products_body">
            <header className="products_header">Products you liked</header>
            <div className="products">
              <LikedProductCard
                products={products}
                dispatch={this.props.dispatch}
                likedProduct={productLike}
              />
            </div>
          </div>
        </div>
      </>
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

export default connect(mapStateToProps)(LikedProductPage);
