import React from "react";
import styles from "./FreePosts.module.css";

const FreePosts = (props) => {
    return (
        <React.Fragment>
            <div className={styles.bottomContent}>
                <div className={styles.block}>
                    <div className={styles.post}>
                        <div className={styles.post}>
                            <div className={styles.header}>
                                <div>
                                    <img src="" />
                                </div>
                                <div className={styles.usernameContainer}>
                                    <div className={styles.username}>Bernadette</div>
                                    <div className={styles.date}>March 8 at 8:25pm</div>
                                </div>
                            </div>
                            <div className={styles.contentTitle}></div>
                            <div className={styles.contentContent}></div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
};

export default FreePosts;