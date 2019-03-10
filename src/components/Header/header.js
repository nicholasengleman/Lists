import React, { Component } from "react";
import styles from './header.module.css';

import HeaderPost from "./HeaderPost/HeaderPost";

class Header extends Component {

    render() {
        return (
            <div className={styles.header}>
                <div className={styles.title}>Top {this.props.selectedClub} Posts Last 60 Minutes</div>
                <div>
                    <div className={styles.postsContainer}>
                        {
                            this.props.posts[this.props.selectedClub].clubposts.trending.map((item, i) => <HeaderPost post={item} key={i}/>)
                        }
                    </div>
                </div>
            </div>
        )
    }
}


export default Header;