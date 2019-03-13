import React, { Component } from "react";
import styles from './header.module.css';

import HeaderPost from "./HeaderPost/HeaderPost";

class Header extends Component {

    render() {
        return (
            <div className={styles.header}>
                <div className={styles.title}>Most Recent {this.props.selectedClub} Posts </div>
                <div>
                    <div className={styles.postsContainer}>
                        {
                            this.props.posts.map((item, i) => <HeaderPost post={item} key={i}/>)
                        }
                    </div>
                </div>
            </div>
        )
    }
}


export default Header;