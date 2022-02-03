import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import classes from './Product.module.css';

function Product(props) {
    return (
      <li className={classes.product}>
        <div className={classes.contentbox}>
          <span className={classes.itemNum}>{props.number}</span>
          <h4 className={classes.itemTitle}>{props.name}</h4>
          <p className={classes.itemDes}>{props.descrip}</p>
          <button className={classes.btn}>
            <Link to={`/item-preview/product_type=${props.name}`}>
              check this type
            </Link>
          </button>
        </div>
        <div className={classes.photo}>
          <img src={props.photo} alt={props.name} />
        </div>
      </li>
    );
}

export default Product;