import { Link  } from 'react-router-dom';
import classes from './ProductItem.module.css';

const ProductItem = (props) => {
    return (
      <li className={classes.productItem}>
        <div className={classes.photo}>
          <img src={props.product.image} alt={props.product.name} />
        </div>
        <div className={classes.content}>
          <h3 className={classes.brand}>{props.product.brand}</h3>
          <p className={classes.name}>{props.product.name}</p>
          <p className={classes.price}>$ {props.product.price}</p>
        </div>
        <Link
          className={classes.btn}
          to={`/product-details/${props.product.id}`}
        >
          Show Details
        </Link>
        
      </li>
    );
}

export default ProductItem;