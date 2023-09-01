import React from "react";

const Navbar = ({ hamActive, setHamActive}) => {
    const logo = 
    "https://cdn.pixabay.com/photo/2016/06/06/12/45/avocado-1439329_1280.png";
    const handleClick = () => {
        setHamActive(!hamActive);
};

return (
    <nav className= {`${styles.navBarWrapper} center`}>
        <div className= {`${styles.navBarWrapper} center`}>
            <button
            className={`${styles.humburger} ${hamActive && styles.active}`}
            onClick={handleClick}
            >
                <span className={styles.humburgerLines}></span>
            </button>
            <div className={`{styles.navLeft}`}>
                <img src={logo} alt="logo" className={styles.brand} />
            </div>
            <div className={`${styles.navRight} center`}>
                <div className={styles.verticalWrapper}>
                    <a href="/" className={`${styles.nav} center`}>
                        Departments
                    </a>
                    <a href="/" className={`${styles.nav} center`}>
                        Help
                    </a>
                    <a href="/" className={`${styles.nav} center`}>
                        Log In
                    </a>
                    <button className={styles.signup}>Sign Up</button>
                </div>
            </div>
        </div>
    </nav>
);

};
export default Navbar;