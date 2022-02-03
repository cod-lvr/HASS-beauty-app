import classes from './Hero.module.css';
import Nav from './nav';

function Hero() {
    return (
      <div className={classes.hero}>
        <Nav />
      </div>
    );
}

export default Hero;