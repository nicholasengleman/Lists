import React from "react";
import { Route, Link } from 'react-router-dom';
import styles from "./DistributerContainer.module.css";

import About from "./About/About";
import FreePosts from "./FreePosts/FreePosts";

const DistributerContainer = (props) => {
    return (
        <div className={styles.container}>
            <div className={styles.hero}></div>
            <div className={styles.tabsContainer}>
                <Link to="/distributer/:user/about"><div className={styles.tab}>About</div></Link>
                <Link to="/distributer/:user/statusUpdates"><div className={styles.tab}>Status Updates</div></Link>
                <Link to="/distributer/:user/freeposts"><div className={styles.tab}>Free Content</div></Link>
                <Link to="/distributer/:user/premiumposts"><div className={styles.tab}>Premium Content</div></Link>
                <Link to="/distributer/:user/connections"><div className={styles.tab}>Connections</div></Link>
                <Link to="/distributer/:user/discussion"><div className={styles.tab}>Discussion</div></Link>
                <Link to="/distributer/:user/events"><div className={styles.tab}>Events</div></Link>
            </div>
            <Route path="/distributer/:user/about" component={About} />
            <Route path="/distributer/:user/freeposts" component={FreePosts} />
            <Route path="/distributer/:user/premiumposts" component={FreePosts} />
            <Route path="/distributer/:user/statusUpdates" component={FreePosts} />






        </div>
    )
};

export default DistributerContainer;

