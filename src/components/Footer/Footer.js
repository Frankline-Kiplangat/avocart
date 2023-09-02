import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <nav className={`${styles.navbarWrapper} center`}>
      <div className={`${styles.navbarColumn} center`}>
        <div className={`${styles.navbarInner} center`}>
          <div className="center">
            <a href="/" className={`${styles.navLink}`}>
              Terms of use
            </a>
            <a href="/" className={`${styles.navLink}`}>
              Privacy policy
            </a>
          </div>
          <div>
            <span>
              <a href="#facebook" className="fab fa-facebook-square">
                {" "}
              </a>
            </span>
            <span>
              <a href="#linkedin" className="fab fa-twitter">
                {" "}
              </a>
            </span>
            <span>
              <a
                href="#instagram"
                className="fab fa-instagram"
                style={{ color: "black" }}
              >
                {" "}
              </a>
            </span>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Footer;
