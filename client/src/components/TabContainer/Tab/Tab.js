import React from "react";

import styles from "./Tab.module.css";

const Tab = (props) => {
    return <div onClick={() => props.onClubSelect(props.name.title)} className={styles.tab}>{props.name.title}</div>
};

export default Tab;
