import React from "react";
import styles from  "./NavContainer.module.css";

const NavContainer = props => {
    return (
        <div className={styles.NavContainer}>
            <button onClick={props.onVideoManagementClick} className={styles.VideoManagementButton}>Video Management</button>
        </div>
    )
};

export default NavContainer;
