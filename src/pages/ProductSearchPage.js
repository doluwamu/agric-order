import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchProducts } from "actions";
import { withRouter } from "react-router-dom/cjs/react-router-dom.min";
import ProductCard from "components/products/ProductCard";
import { capitalize } from "helpers/Capitalize";
import Loading from "helpers/Loading";

const ProductSearchPage = (props) => {
  const { category } = props.match.params;
  const { dispatch, isFetching, products, productLike } = props;

  useEffect(() => {
    window.scrollTo(500, 0);
    dispatch(fetchProducts(category));
  }, [dispatch, category]);

  if (isFetching || !category) {
    return <Loading />;
  }

  return (
    <div className="all_products">
      <div className="all_products_body">
        <header className="products_header">{capitalize(category)}</header>
        <div>
          {products.length > 0 && !isFetching ? (
            <div className="products">
              <ProductCard
                products={products}
                dispatch={dispatch}
                likedProduct={productLike}
              />
            </div>
          ) : (
            <h2
              style={{ textAlign: "center", marginTop: "3rem", color: "red" }}
            >
              There is no product of "{capitalize(category)}" found
            </h2>
          )}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = ({
  products: { allProducts },
  likeProduct: { likeProductSuccess },
}) => {
  return {
    products: allProducts.items,
    isFetching: allProducts.isFetching,
    productLike: likeProductSuccess,
  };
};

const ProductSearchPageWithRouter = withRouter(ProductSearchPage);

export default connect(mapStateToProps)(ProductSearchPageWithRouter);
