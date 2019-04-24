import React from "react";
import styles from './HeaderPost.module.css';
import Moment from "moment/moment";

const HeaderPost = ({post}) => {

    return (
        <div className={styles.headerPost}>
            <div className={styles.videoContainer}>
                <iframe title={post.youtubeLink} width="560" height="315"
                        src={`https://www.youtube.com/embed/${post.youtubeLink}`} frameBorder="0"
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen>
                </iframe>
            </div>
            <div className={styles.textContent}>
                <div className={styles.postTitle}>{post.title}</div>
                <div className={styles.author}>{post.username}</div>
                <div className={styles.miscInfo}>Posted: {Moment(post.publishDate).fromNow()}</div>
                <div className={styles.miscInfo}>Likes: {post.likes}</div>
            </div>
        </div>
    );
};

export default HeaderPost;
