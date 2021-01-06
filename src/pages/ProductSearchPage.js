import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchProducts } from "actions";
import { withRouter } from "react-router-dom/cjs/react-router-dom.min";
import ProductCard from "components/products/ProductCard";
import { capitalize } from "helpers/Capitalize";

const ProductSearchPage = ({ dispatch, match, products }) => {
  useEffect(() => {
    dispatch(fetchProducts(match.params.category));
  }, [fetchProducts]);
  console.log(match);

  return (
    <div className="all_products">
      <div className="all_products_body">
        <header className="products_header">
          {capitalize(match.params.category)}
        </header>
        <div className="products">
          <ProductCard products={products} />
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = ({ products: { dataFetched, fetchingData } }) => {
  return {
    products: dataFetched,
    isFetching: fetchingData,
  };
};

const ProductSearchPageWithRouter = withRouter(ProductSearchPage);

export default connect(mapStateToProps)(ProductSearchPageWithRouter);
