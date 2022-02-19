import classes from './Brands.module.css';
import brands from '../../media/assets/brands.png';
import mobBrands from '../../media/mobile/brands.png';

function Brands() {
    return (
      <section className={classes.brands}>
        <div className={classes.content}>
          <h2>SHOP LASTEST BRANDS</h2>
        </div>
        <div className={classes.photo}>
          <picture>
            <source srcSet={mobBrands} media="(max-width: 768px)" />
            <source srcSet={brands} media="(min-width: 768px)"/>
            <img src={mobBrands} alt="brands" />
          </picture>
        </div>
      </section>
    );
}

export default Brands;