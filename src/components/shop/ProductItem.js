import classes from './ProductItem.module.css';

const ProductItem = (props) => {
    return(
        <li className={classes.productItem} key={props.product.id}>
            <div className={classes.photo}>
                <img src={props.product.image} alt={props.product.name} />
            </div>
            <div className={classes.content}>
                <h3 className={classes.brand}>{props.product.brand}</h3>
                <p className={classes.name}>{props.product.name}</p>
                <p className={classes.price}>$ {props.product.price}</p>
            </div>
        </li>
    );
}

export default ProductItem;