import React from "react";
import styles from "./Loading.module.css"
const loading = () => {
    return(
        <>
        <div className={`container`}>
            <div className={`row`}>
                <div className={`col-12`}>
                    <p>Loading</p>
                </div>
            </div>
        </div>
        </>
    )
}

export default loading;