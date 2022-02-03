import classes from "./nav.module.css";
import { NavLink } from "react-router-dom";
import Logo from '../../media/Logo.png';

function Nav() {
  return (
    <nav className={classes.navBar}>
      <div className={classes.logo}>
        <img src={Logo} alt="Logo" />
      </div>
      <div className={classes.navLinks}>
        <NavLink
          to="/"
          activeClassName={classes.active}
          className={classes.link}
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          activeClassName={classes.active}
          className={classes.link}
        >
          About
        </NavLink>
        <NavLink
          to="/shop"
          activeClassName={classes.active}
          className={classes.link}
        >
          Shop
        </NavLink>
        <NavLink
          to="/cart"
          activeClassName={classes.active}
          className={classes.link}
        >
          Cart(0)
        </NavLink>
      </div>
    </nav>
  );
}

export default Nav;
