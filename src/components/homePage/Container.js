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
              <span>
                <i class="fa-solid fa-lips"></i>
              </span>
              <h4 className={classes.itemTitle}>vegan</h4>
              <p className={classes.itemDes}>
                making it look like readable English. Many desktop publishing
                packages and web page editors now use Lorem Ipsum as their
                default model text,
              </p>
            </div>
            <div className={classes.content}>
              <span>
                <i class="fa-solid fa-leaf"></i>
              </span>
              <h4 className={classes.itemTitle}>nature ingrediants</h4>
              <p className={classes.itemDes}>
                Contrary to popular belief, Lorem Ipsum is not simply random
                text. It has roots in a piece of classical Latin literature from
                45 BC, making it over 2000 years old.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
}

export default Container;