/*eslint-disable  jsx-a11y/anchor-is-valid */

import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchProducts } from "actions";
import ProductCard from "components/products/ProductCard";
import Loading from "helpers/Loading";
import ConnectionError from "errors/ConnectionError";
import HeadImage from "components/shared/HeadImage";

class ProductPage extends Component {
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
        <HeadImage heading={"We hope you enjoy shopping with us"} />
        <div className="all_products">
          <div className="all_products_body">
            <header className="products_header">Check out our animals</header>
            <div className="products">
              <ProductCard
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

export default connect(mapStateToProps)(ProductPage);
