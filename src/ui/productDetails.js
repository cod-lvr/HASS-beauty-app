import classes from "./productDetails.module.css";

const ProductDetails = (props) => {
  return (
    <section className={classes.item}>
      <div className={classes.left}>
        <div className={classes.image}>
          <img src={props.itemDetails.image} alt={props.itemDetails.name} />
        </div>
        <div className={classes.colors}></div>
      </div>
      <div className={classes.right}>
        <div className={classes.content}>
          <h1 className={classes.name}>{props.itemDetails.name}</h1>
          <h2 className={classes.brand}>{props.itemDetails.brand}</h2>
          <h3 className={classes.price}>${props.itemDetails.price}</h3>
          <p className={classes.description}>{props.itemDetails.description}</p>
        </div>
        <div className={classes.actions}>
          <button>-</button>
          <button>1</button>
          <button>+</button>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
