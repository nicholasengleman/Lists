import React from "react";

import styles from './MainContainer.module.css';

import MainPost from "./MainPost/MainPost";

const MainContainer = (props) => {
    return (
        <div className={styles.container}>
            <div>Top { props.selectedClub } Today</div>
            <div>
                {
                    props.posts[props.selectedClub].clubposts.normal.map((post, i) => <MainPost key={i} post={post}/>)
                }
            </div>
        </div>
    )

};

export default MainContainer;