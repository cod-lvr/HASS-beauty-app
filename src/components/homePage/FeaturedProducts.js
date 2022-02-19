import { Link } from 'react-router-dom';
import classes from './FeaturedProducts.module.css';

function FeaturedProducts() {
    return (
      <section className={classes.featured}>
        <div className={classes.left}>
          <div className={classes.title}>
            <h2>Featured Products</h2>
          </div>
        </div>
        <div className={classes.right}>
          <div className={classes.card}>
            <h4>title</h4>
            <p>mediam</p>
            <p>price</p>
          </div>
          <div className={classes.card}>
            <h4>title</h4>
            <p>mediam</p>
            <p>price</p>
          </div>
          <div className={classes.card}>
            <h4>title</h4>
            <p>mediam</p>
            <p>price</p>
          </div>
          <div className={classes.card}>
            <h4>title</h4>
            <p>mediam</p>
            <p>price</p>
          </div>
        </div>
        <div className={classes.link}>
            <Link to="./shop">shop all products</Link>
          </div>
      </section>
    );
}

export default FeaturedProducts;