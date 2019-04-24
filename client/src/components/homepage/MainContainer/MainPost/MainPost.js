import React from "react";
import Moment from "moment/moment";

import styles from './MainPost.module.css';

const MainPost = (props) => {
    return (
        <div className={styles.mainPostContainer}>
            <div className={styles.videoContainer}>
                <iframe title={props.post.youtubeLink} width="560" height="315" src={`https://www.youtube.com/embed/${props.post.youtubeLink}`} frameBorder="0"
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen>
                </iframe>
            </div>
            <div className={styles.textContent}>
                <div className={styles.topRow}>
                    <span className={styles.username}>{props.post.username}</span>
                    <span className={styles.date}>{Moment(props.post.publishDate).fromNow()}</span>
                </div>
                <div className={styles.title}>{props.post.title}</div>
                {/*<div className={styles.subtitle}>{props.post.subtitle}</div>*/}
            </div>

        </div>
    )
};

export default MainPost;