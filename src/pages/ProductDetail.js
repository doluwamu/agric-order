import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { fetchProductById, fetchProducts } from "actions";
import ProductDetails from "components/products/ProductDetails";
import Loading from "helpers/Loading";
import ConnectionError from "errors/ConnectionError";
import { capitalize } from "helpers/Capitalize";
import RelatedProducts from "components/products/RelatedProducts";

export class ProductDetail extends Component {
  componentDidMount() {
    const { id } = this.props.match.params;

    this.props.dispatch(fetchProductById(id));
    this.props.dispatch(fetchProducts());
  }

  render() {
    const {
      product,
      isFetching,
      isFetchingRelatedProducts,
      dataFetchingFail,
      productsFetchingFail,
      cartItem,
      products,
      productLike,
    } = this.props;

    if (isFetching || isFetchingRelatedProducts) {
      return <Loading />;
    }

    if (
      (dataFetchingFail && dataFetchingFail.length > 0) ||
      (productsFetchingFail && productsFetchingFail.length > 0)
    ) {
      return <ConnectionError />;
    }

    return (
      product && (
        <>
          <div className="selected product-detail">
            <header
              className="products_header"
              style={{
                textAlign: "center",
                marginTop: "2rem",
              }}
            >
              {capitalize(product.name)}
            </header>
            <div className="details-page display">
              <ProductDetails product={product} cartItem={cartItem} />
            </div>
            <div className="all_products">
              <div className="all_products_body">
                <header className="products_header">
                  Other products offered by seller
                </header>
                <div className="products">
                  <RelatedProducts
                    products={products}
                    dispatch={this.props.dispatch}
                    likedProduct={productLike}
                    ownerProduct={product}
                  />
                </div>
              </div>
            </div>
            )
          </div>
        </>
      )
    );
  }
}

const mapStateToProps = ({
  cart: { getCartItemsSuccess },
  products: { selectedProduct, allProducts },
  likeProduct: { likeProductSuccess },
}) => {
  return {
    product: selectedProduct.items,
    isFetching: selectedProduct.isFetching,
    isFetchingRelatedProducts: selectedProduct.isFetching,
    dataFetchingFail: selectedProduct.errors,
    productsFetchingFail: allProducts.errors,
    products: allProducts.items,
    productLike: likeProductSuccess,
    cartItem: getCartItemsSuccess,
  };
};

const ProductDetailWithRouter = withRouter(ProductDetail);
export default connect(mapStateToProps)(ProductDetailWithRouter);
