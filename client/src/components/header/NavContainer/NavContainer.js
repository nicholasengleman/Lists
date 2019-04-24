import React, { Component } from "react";
import styles from "./NavContainer.module.css";

import SignInModal from "../SignInModal/SignInModal";

class NavContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            displayLogin: false
        }
    }

    handleClickSignIn = () => {
        this.setState({ displayLogin: !this.state.displayLogin });
    };

    render() {
        return (
            <React.Fragment>
                {this.state.displayLogin && <SignInModal toggle={this.handleClickSignIn}></SignInModal>}
                <div className={styles.NavContainer}>
                    <div className={styles.NavContent}>
                        <div className={styles.username}></div>
                        <div onClick={this.handleClickSignIn} className={styles.signIn}>SIGN IN</div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default NavContainer;
