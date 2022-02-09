import classes from './Container.module.css';
import img from '../../media/assets/Component 2.png'

function Container() {
    return (
      <section className={classes.conatiner}>
        <div className={classes.message}>
          <p>Our Message</p>
          <h2>"i love the confidence that make up gives me." - Tyra Banks</h2>
        </div>
        <div className={classes.col}>
          <div className={classes.left}>
            <img src={img} alt="photo" />
          </div>
          <div className={classes.right}>
            <div className={classes.content}>
              <span>logo</span>
              <h4 className={classes.itemTitle}>title</h4>
              <p className={classes.itemDes}>
                  
              </p>
            </div>
            <div className={classes.content}>
              <span>logo</span>
              <h4 className={classes.itemTitle}>title</h4>
              <p className={classes.itemDes}>lorem10</p>
            </div>
          </div>
        </div>
      </section>
    );
}

export default Container;