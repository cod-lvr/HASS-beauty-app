import classes from './Footer.module.css';
import Logo from '../media/Logo.png';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

function Footer() {
    return (
      <footer className={classes.footer}>
        <div className={classes.logo}>
          <img src={Logo} alt="Logo" />
        </div>
        <div className={classes.links}>
          <div className={classes.col}>
            <p className={classes.title}>product types</p>
            <Link to="">Blush</Link>
            <Link to="">Bronzer</Link>
            <Link to="">Eye brow</Link>
            <Link to="">Eye liner</Link>
            <Link to="">Eye shaddow</Link>
          </div>
          <div className={classes.col}>
            <p className={classes.title}>brands</p>
            <Link to="">almay</Link>
            <Link to="">revlon</Link>
            <Link to="">l'oreal</Link>
            <Link to="">boosh</Link>
            <Link to="">sante</Link>
          </div>
          <div className={classes.col}>
            <p className={classes.title}>other tags</p>
            <Link to="">Water free</Link>
            <Link to="">Dairy free</Link>
            <Link to="">Gluten free</Link>
            <Link to="">oil free</Link>
            <Link to="">vegan</Link>
          </div>
        </div>
      </footer>
    );
}

export default Footer;