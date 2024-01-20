import React from "react";
import styles from "./Loading.module.css"
const loading = () => {
    return(
        <>
        <div className={`container`}>
            <div className={`row`}>
                <div className={`col-12`}>
                    <div className={styles.peeek_loading}>
                        <ul>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default loading;