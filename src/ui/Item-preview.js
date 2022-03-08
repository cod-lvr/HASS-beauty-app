import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import Footer from "./Footer";
import MainNav from "./Main-nav";
import ProductDetails from "./productDetails";
import useRequest from "../components/hooks/useReqest";

const  ItemPreview = ()  => {
  const [itemData, setItemData] = useState([]);
  const params = useParams();

  const [error, isLoading, productsList] = useRequest(
    "http://makeup-api.herokuapp.com/api/v1/products.json",
    params
  );

  const findItemFromData = () => {
    const selectedItem = productsList.find(
      (item) => item.id === +params.productId
    );
    setItemData(selectedItem);
  };

    useEffect(() => {
      findItemFromData();
    }, []);


  let content = <p>laoding..</p>;

  if (!isLoading) {
    content = <ProductDetails itemDetails={itemData} />;
  }

  if (error) {
    content = <p>can not display item.</p>
  }

  return (
    <React.Fragment>
      <MainNav />
      {content}
      <Footer />
    </React.Fragment>
  );
}

export default ItemPreview;
