import React from "react";
import styles from "./NavContainer.module.css";

const NavContainer = props => {
    return (
        <div className={styles.NavContainer}>
            <div className={styles.NavContent}>
                {/*<div className={styles.user - photo}></div>*/}
                <div className={styles.username}></div>
                <div className={styles.signIn}>SIGN IN</div>
            </div>
        </div>
    )
};

export default NavContainer;
