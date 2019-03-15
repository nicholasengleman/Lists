import React from "react";

import styles from "./about.module.css";

const About = (props) => {
    return (
        <React.Fragment>
            <div className={styles.bottomContent}>
                <div className={styles.leftColumn}>
                    <div className={`${styles.block} ${styles.about}`}>
                        <div className={styles.title}>About</div>
                        <div>Location</div>
                        <div>Occupation</div>

                    </div>
                    <div className={styles.block}>
                        <div className={styles.title}>Stats</div>
                        <div>2,670 Subscribers</div>
                        <div>$5,344 per month</div>
                    </div>
                </div>
                <div className={styles.rightColumn}>
                    <div className={styles.block}>
                        <div className={styles.post}>ghjg</div>
                    </div>
                </div>
            </div>

        </React.Fragment>
    )
};

export default About;