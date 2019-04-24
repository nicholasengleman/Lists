import React, { Component } from "react";

import styles from "./about.module.css";

class About extends Component {


    render() {
        return (
            <React.Fragment>
                <div className={styles.bottomContent}>
                    <div className={styles.leftColumn}>
                        <div className={`${styles.block} ${styles.about}`}>
                            <div className={styles.title}>About</div>
                            {this.props.state.changed && <div className={styles.saveButton} onClick={this.props.handleSubmit}>Save</div>}
                            {this.props.state.edit && <form>
                                <input className={styles.input}
                                       name="location"
                                       type="text"
                                       onChange={(event) => this.props.handleChange(event)}
                                       value={this.props.state.location.value}
                                       placeholder="Location" />
                            </form>}
                            {!this.props.state.edit && <p>Location: {this.props.state.location.value}</p>}

                            {this.props.state.edit && <form>
                                <input className={styles.input}
                                       name="occupation"
                                       type="text" onChange={(event) => this.props.handleChange(event)}
                                       value={this.props.state.occupation.value}
                                       placeholder="Ocupation" />
                            </form>}
                            {!this.props.state.edit && <p>Occupation: {this.props.state.occupation.value}</p>}

                            {this.props.state.edit && <form>
                                <input className={styles.input}
                                       name="city"
                                       type="text" onChange={(event) => this.props.handleChange(event)}
                                       value={this.props.state.city.value}
                                       placeholder="City" />
                            </form>}
                            {!this.props.state.edit && <p>City: {this.props.state.city.value}</p>}

                            {this.props.state.edit && <form>
                                <input className={styles.input}
                                       name="zodiac"
                                       type="text" onChange={(event) => this.props.handleChange(event)}
                                       value={this.props.state.zodiac.value}
                                       placeholder="Zodiac Sign" />
                            </form>}
                            {!this.props.state.edit && <p>Zodiac: {this.props.state.zodiac.value}</p>}

                        </div>
                    </div>
                    <div className={styles.rightColumn}>
                        <div className={styles.block}>
                            <div className={styles.post}></div>
                        </div>
                    </div>
                </div>

            </React.Fragment>
        )
    }
}

export default About;