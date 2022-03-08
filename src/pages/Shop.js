import React, { useState } from "react";

import MainNav from "../ui/Main-nav";
import Filter from "../ui/Filter";
import ProductsList from "../components/shop/ProductsList.js";
import Footer from "../ui/Footer";
import useRequest from "../components/hooks/useReqest";

const Shop = () => {
  const [productTag, setProductTag] = useState();
  const [productType, setProductType] = useState();
  const [productBrand, setProductBrand] = useState();

  const filterValuesHandler = (tag, type, brand) => {
    setProductTag(tag);
    setProductType(type);
    setProductBrand(brand);
  };

  let params = {};

  if (productTag) {
    params = {
      product_tags: productTag,
      ...params,
    };
  } else if (productType) {
    params = {
      product_type: productType,
      ...params,
    };
  } else if (productBrand) {
    params = {
      brand: productBrand.toString(),
      ...params,
    };
  } else {
    params = {};
  }

  const [error, isLoading, productsList] = useRequest(
    "http://makeup-api.herokuapp.com/api/v1/products.json",
    params
  );

  let content = <p>loading..</p>;

  if (!isLoading && productsList.length > 0) {
    content = <ProductsList products={productsList} />;
  }

  if (!isLoading && productsList.length === 0) {
    content = <p>no products to display.</p>;
  }

  if (!isLoading && error) {
    content = <p>{error}</p>;
  }

  return (
    <React.Fragment>
      <MainNav />
      <Filter onSubmit={filterValuesHandler} />
      {content}
      <Footer />
    </React.Fragment>
  );
};

export default Shop;
