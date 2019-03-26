import React, { Component }  from "react";
import { Route, Link } from 'react-router-dom';
import styles from "./DistributerContainer.module.css";

import About from "./About/About";
import FreePosts from "./FreePosts/FreePosts";

class DistributerContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            edit: false,
            changed: false,
            location: {
                value: '',
                changed: false
            },
            occupation: {
                value: '',
                changed: false
            },
            city: {
                value: '',
                changed: false
            },
            zodiac: {
                value: '',
                changed: false
            }
        };

        this.handleChange = this.handleChange.bind(this);
        this.toggleEditMode = this.toggleEditMode.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const { target: { name, value }} = event;
        let copy = Object.assign({}, this.state[name]);
        copy.value = value;
        copy.changed = true;
        this.setState({ [name] : copy });
        this.setState({ changed : true });
    }

    handleSubmit() {
        this.setState({ edit: false, changed: false });
    }

    toggleEditMode() {
        this.setState({ edit: !this.state.edit });
    }


    render() {
        return (
            <div className={styles.container}>
                <div className={styles.hero}>
                    <button className={styles.edit} onClick={this.toggleEditMode}>Edit</button>
                    <div className={styles.about}>
                        <div>2,670 Subscribers</div>
                        <div>$5,344 per month</div>
                    </div>
                </div>
                <div className={styles.tabsContainer}>
                    <Link to="/distributer/:user/about">
                        <div className={styles.tab}>About</div>
                    </Link>
                    <Link to="/distributer/:user/statusUpdates">
                        <div className={styles.tab}>Status Updates</div>
                    </Link>
                    <Link to="/distributer/:user/freeposts">
                        <div className={styles.tab}>Free Content</div>
                    </Link>
                    <Link to="/distributer/:user/premiumposts">
                        <div className={styles.tab}>Premium Content</div>
                    </Link>
                    <Link to="/distributer/:user/connections">
                        <div className={styles.tab}>Connections</div>
                    </Link>
                    <Link to="/distributer/:user/discussion">
                        <div className={styles.tab}>Discussion</div>
                    </Link>
                    <Link to="/distributer/:user/events">
                        <div className={styles.tab}>Events</div>
                    </Link>
                </div>
                <Route path="/distributer/:user/about" render={(props) => (<About {...props} handleChange={this.handleChange} handleSubmit={this.handleSubmit} state={this.state}/> )} />
                <Route path="/distributer/:user/freeposts" component={FreePosts}/>
                <Route path="/distributer/:user/premiumposts" component={FreePosts}/>
                <Route path="/distributer/:user/statusUpdates" component={FreePosts}/>
            </div>
        )
    }
}

export default DistributerContainer;
