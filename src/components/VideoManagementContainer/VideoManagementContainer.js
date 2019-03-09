import React from "react";
import styles from  "./VideoManagementContainer.module.css";

const VideoManagementContainer = (props) => {

    const display = props.active ? 'active' : '';
    const classes = `${styles.VideoManagementContainer} ${styles}.${display}`;

    return (
        <div className={classes}></div>
    )
};

export default VideoManagementContainer;