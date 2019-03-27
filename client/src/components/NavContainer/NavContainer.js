import React from "react";
import { Link } from 'react-router-dom';
import styles from "./NavContainer.module.css";

const NavContainer = props => {
    return (
        <div className={styles.NavContainer}>
            <div className={styles.NavContent}>
                {/*<div className={styles.user - photo}></div>*/}
                <div className={styles.username}></div>
                <Link to="/mypremiumcontent"><div className={styles.signIn}>My Premium Content</div></Link>
                <Link to="/login"><div className={styles.signIn}>SIGN IN</div></Link>
            </div>
        </div>
    )
};

export default NavContainer;
