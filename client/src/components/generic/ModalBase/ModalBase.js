import React from "react";
import ReactDOM from 'react-dom';
import styles from "./ModalBase.module.css";

const ModalBase = (props) => {

    return (ReactDOM.createPortal(
            <div onClick={props.toggle} className={styles.modalOverlay}>
                <div onClick={(e) => e.stopPropagation()} className={styles.modal}>
                    {props.children}
                </div>
            </div>,
            document.body
        )
    )
};


export default ModalBase;