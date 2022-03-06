import React from "react";

import classes from 'Item-preview.module.css';

import Footer from "./Footer";
import MainNav from "./Main-nav";


function ItemPreview(props) {
  return (
    <React.Fragment>
      <MainNav />
      <section className={classes.item}>
        <div className={classes.left}>
          <div className={classes.image}>
            <img src={props.img} alt={props.name} />
          </div>
          <div className={classes.colors}></div>
        </div>
        <div className={classes.right}>
          <div className={classes.content}>
            <h2 className={classes.brand}>{props.brand}</h2>
            <h1 className={classes.name}>{props.name}</h1>
            <p className={classes.description}>{props.description}</p>
          </div>
          <div className={classes.actions}>
            <button>-</button>
            <button>{props.number}</button>
            <button>+</button>
          </div>
        </div>
      </section>
      <Footer />
    </React.Fragment>
  );
}

export default ItemPreview;
