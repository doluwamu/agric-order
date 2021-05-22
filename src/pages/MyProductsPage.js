/*eslint-disable  jsx-a11y/anchor-is-valid */

import React, { Component } from "react";
import { connect } from "react-redux";
import { getUserProducts } from "actions";
import ProductManageCard from "components/products/ProductManageCard";

import Loading from "helpers/Loading";
import ConnectionError from "errors/ConnectionError";

class MyProductsPage extends Component {
  componentDidMount() {
    this.props.dispatch(getUserProducts());
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
      <div className="all_products">
        <div className="all_products_body">
          <header className="products_header">My Products</header>
          <div className="products">
            <ProductManageCard
              products={products}
              dispatch={this.props.dispatch}
              productLike={productLike}
            />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({
  manage: { products },
  likeProduct: { likeProductSuccess },
}) => {
  return {
    isFetching: products.isFetching,
    products: products.items,
    dataFetchingFail: products.errors,
    productLike: likeProductSuccess,
  };
};

export default connect(mapStateToProps)(MyProductsPage);
