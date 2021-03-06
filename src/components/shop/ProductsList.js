import classes from './ProductsList.module.css';

import ProductItem from './ProductItem';

const ProductsList = (props) => {
    return (
        <ul className={classes.productList}>
            {props.products.map(product => {
                return <ProductItem product={product}  key={product.id}/>
            })}
        </ul>
    )
}

export default ProductsList;