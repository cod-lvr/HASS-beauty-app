import classes from './Hero.module.css';
import Nav from './nav';

function Hero() {
    return (
      <div className={classes.hero}>
        <Nav />
        <div className={classes.content}>
          <h1>Becouse You Deserve A Better <span className={classes.marker}>Make Up</span></h1>
        </div>
      </div>
    );
}

export default Hero;