import React, { useState, useEffect, useCallback, useMemo } from 'react';

import axios from 'axios';

import MainNav from '../ui/Main-nav';
import Filter from '../ui/Filter';
import ProductsList from "../components/shop/ProductsList.js";
import Footer from '../ui/Footer';


const Shop = () => {
   const [productTag, setProductTag] = useState();
   const [productType, setProductType] = useState();
   const [productBrand, setProductBrand] = useState();

  const [isLoading, setIsLoading] =  useState(false);
  const [error, setError] = useState(null);

  const [productsList, setProductList] = useState([]);

  const filterValuesHandler = (tag, type, brand) => {
    setProductTag(tag);
    setProductType(type);
    setProductBrand(brand);
  }


  let params = {};

  if (productTag) {
    params = {
      product_tags:productTag,
      ...params
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

  const sendHttpRequest = useCallback(async () => {
    try {
      setIsLoading(true);
      setError(null);

      const response = await axios.get(
        "http://makeup-api.herokuapp.com/api/v1/products.json",
        {
          params: params,
        }
      );

      const transformedData = response.data.map((product) => {
        return {
          id: product.id,
          brand: product.brand,
          description: product.description,
          price: product.price,
          image: product.image_link,
          name: product.name,
          colors: product.product_colors,
        };
      });

      setProductList(transformedData);
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  }, []);

  // useMemo(() => {
  //   params
  // }, [])

   useEffect(() => {
     sendHttpRequest();
   }, [sendHttpRequest]);


  return (
    <React.Fragment>
      <MainNav />
      <main>
        <Filter onSubmit={filterValuesHandler} />
        {!isLoading && productsList.length > 0 && (
          <ProductsList products={productsList} />
        )}
        {!isLoading && productsList.length === 0 && (
          <p>no products to display.</p>
        )}
        {!isLoading && error && <p>{error}</p>}
        {isLoading && <p>loading products</p>}
      </main>
      <Footer />
    </React.Fragment>
  );
}

export default Shop;
