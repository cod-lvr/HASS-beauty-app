import  { useState, useEffect, useCallback } from "react";
import axios from "axios";

const useRequest = (url, params) => {
 const [isLoading, setIsLoading] = useState(false);
 const [error, setError] = useState(null);
 const [productsList, setProductList] = useState([]);

 
  const sendHttpRequest = useCallback(async () => {
    try {
      setIsLoading(true);
      setError(null);

      const response = await axios.get(
        url,
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

    useEffect(() => {
      sendHttpRequest();
    }, []);

  return [
      isLoading,
      error,
      productsList  
  ]
}

export default useRequest;