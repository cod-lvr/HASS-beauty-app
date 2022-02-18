import classes from './ProductsType.module.css';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from "react-responsive-carousel";

import ProductTypes from '../../data/ProductTypes';
import Frame from '../../ui/Frame';

function  ProductType(){
  const frameOne = ProductTypes.slice(0, 3);
  const frameTwo = ProductTypes.slice(3, 6);
  const frameThree = ProductTypes.slice(6, 9);

    return (
      <section className={classes.products}>
        <div className={classes.title}>
          <p>OUR PRODUCTS</p>
          <h2>Diffrent Product Types</h2>
        </div>
        <ul className={classes.productList}>
          <Carousel autoPlay='true' infiniteLoop='true' showStatus={false} showThumbs={false} showIndicators={false}>
            <Frame products={frameOne} />
            <Frame products={frameTwo} />
            <Frame products={frameThree} />
          </Carousel>
        </ul>
      </section>
    );
}

export default ProductType;