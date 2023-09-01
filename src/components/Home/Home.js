import styles from "./Home.module.css";

const Home = () => {
  return (
    <div className={`${styles.homeWrapper} center`}>
      <select className={styles.dropDown}>
        <option value="US">US</option>
        <option value="IN">IN</option>
      </select>
      <div className={`${styles.homeInner}`}>
        <h2 className={styles.headerText}>
          Order groceries for delivery or pickup today
        </h2>
        <div className={styles.slogan}>
          <p>Whatever you want from our local stores, brought right to your doorstep</p>
        </div>
        <div className={styles.inputLocation}>
          <i className="fas fa-map-marker-alt"> </i>
          <input type="text" placeholder="Enter your address" />
          <i className={`${styles.arrow} fas fa-arrow-right`}></i>
        </div>
      </div>
      <div className={styles.homeImage}>
        <img
          src="https://d2d8wwwkmhfcva.cloudfront.net/x856/d2guulkeunn7d8.cloudfront.net/assets/homepage/homepage_background_full_m3_cropped-8d2d286263821da7decd7c61fb1db1eb0e3dec13e0c356277d6d3cb7484c024a.jpg"
          alt=""
        />
      </div>
    </div>
  );
};
export default Home;
