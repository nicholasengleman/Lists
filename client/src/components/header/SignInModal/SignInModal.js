import React, {Component} from "react";
import styles from "./SignInModal.module.css";

class SignInModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            active: false,

        }
    }

    toggleOpen() {
        const currentState = this.state.active;
        this.setState({active: !currentState});
    }

    handleChange(event) {
        const value = event.target.name;
        this.setState({ [value]: event.target.value });
    }


    render() {
        return (
            <div className={styles.signInModalOverlay} onClick={this.toggleOpen}>
                <div className={styles.signInModalBox}>
                    <div className={styles.formTitle}>Create an Account</div>
                    <form className={styles.form} onSubmit={this.handleSubmit}>
                        <input placeholder="Your name"
                               type="text" name="username"
                               value={this.state.name}
                               onChange={(event) => this.handleChange(event)}/>
                        <input placeholder="Your email"
                            type="text"
                            name="email"
                            value={this.state.email}
                            onChange={(event) => this.handleChange(event)}/>
                        <input placeholder="Please confirm your email"
                            type="text"
                            name="confirmEmail"
                            value={this.state.emailconfirm}
                            onChange={(event) => this.handleChange(event)}/>
                        <input placeholder="Your password"
                            type="text"
                            name="password"
                            value={this.state.password}
                            onChange={(event) => this.handleChange(event)}/>
                        <input type="submit" value="Submit"/>
                    </form>
                </div>
            </div>
        )
    }
}

export default SignInModal;