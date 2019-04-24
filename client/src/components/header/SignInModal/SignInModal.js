import React, {Component} from "react";
import styles from "./SignInModal.module.css";

import axios from 'axios';

import ModalBase from "../../generic/ModalBase/ModalBase";

class SignInModal extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    handleSubmit(event) {
        event.preventDefault();
        const user = {
            username : this.state.username,
            email : this.state.email,
            password : this.state.password
        };

        console.log(user);

        axios.post('http://localhost:5000/api/register', { user })
            .then(res => {
                console.log(res.data);
            });
        this.props.toggle();
    }

    handleChange(event) {
        const value = event.target.name;
        this.setState({[value]: event.target.value});
    }

    render() {
        return (
          <ModalBase toggle={this.props.toggle}>
              <div className={styles.animation}></div>

              <div>
                <div className={styles.formTitle}>Register new account</div>
                  <div className={styles.subTitle}>Welcome to the party!</div>

                <form className={styles.form} onSubmit={this.handleSubmit}>

                    <label htmlFor="username">Choose an awesome username</label>
                    <input placeholder="irocktheworld"
                           type="text"
                           name="username"
                           value={this.state.name}
                           onChange={(event) => this.handleChange(event)}/>

                    <label htmlFor="email">Enter your email </label>
                    <input placeholder=""
                           type="text"
                           name="email"
                           value={this.state.email}
                           onChange={(event) => this.handleChange(event)}/>

                    <label htmlFor="username">Wow that email is so badass, can you confirm it?</label>
                    <input placeholder=""
                           type="text"
                           name="confirmEmail"
                           value={this.state.emailconfirm}
                           onChange={(event) => this.handleChange(event)}/>

                    <label htmlFor="username">Please choose a password known only to you.</label>
                    <input placeholder="Your password"
                           type="text"
                           name="password"
                           value={this.state.password}
                           onChange={(event) => this.handleChange(event)}/>
                    <input type="submit" value="Submit" onClick={(event) => this.handleSubmit(event)}/>
                </form>
              </div>
          </ModalBase>

          </ModalBase>
        )
    }
}

export default SignInModal;