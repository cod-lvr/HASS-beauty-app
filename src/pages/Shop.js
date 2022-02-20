import React, { useState, useEffect } from 'react';

import axios from 'axios';

import MainNav from '../ui/Main-nav';
import Filter from '../ui/Filter';
import Footer from '../ui/Footer';


const Shop = () => {
   const [productTag, setProductTag] = useState();
   const [productType, setProductType] = useState();
   const [productBrand, setProductBrand] = useState();

  const [isLoading, setIsLoading] =  useState(false);
  const [error, setError] = useState(null);

  const [productList, setProductList] = useState();

  const filterValuesHandler = (tag, type, brand) => {
    setProductTag(tag);
    setProductType(type);
    setProductBrand(brand);
  }

  useEffect(() => {
    sendHttpRequest();
  }, [productTag, productType, productBrand])

  const sendHttpRequest = async () => {
    let params = {};

    if (productTag) {
      params.product_tags = productTag;
    } else if (productType) {
      params.product_type = productType;
    } else if (productBrand) {
      params.brand = productBrand.toString() ;
    }else {
      params = {};
    }

     try {
       setIsLoading(true);
       const response = await axios.get(
         "http://makeup-api.herokuapp.com/api/v1/products.json",
         {
           params: params,
         }
       );
       setIsLoading(false);
      //  setProductList(response);
      console.log(response.data);
     } catch (error) {
      setIsLoading(false);
      setError(error);
     }
  }


  return (
    <React.Fragment>
      <MainNav />
      <main>
        <Filter onSubmit={filterValuesHandler} />
        <ul>{isLoading ? <p>loading..</p> : <li>{productList}</li>}</ul>
      </main>
      <Footer />
    </React.Fragment>
  );
}

export default Shop;
