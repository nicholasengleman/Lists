import React from "react";
import Tab from "./Tab/Tab";

import styles from "./TabContainer.module.css";

const TabContainer = (props) => {
    return <div className={styles.tabContainer}>
        {
            props.clubs.map((club, i) => <Tab key={i} name={club} onClubSelect={props.onClubSelect}/>)
        }
    </div>;
};

export default TabContainer;
