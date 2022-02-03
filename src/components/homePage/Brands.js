import classes from './Brands.module.css';
import brand from '../../media/assets/brands.png';
 
function Brands() {
    return(
        <section className={classes.brands}>
            <div className={classes.content}>
                <h2>SHOP LASTEST BRANDS</h2>
            </div>
            <div className={classes.photo}>
                <img src={brand} alt='brands' />
            </div>
        </section>
    );
}

export default Brands;