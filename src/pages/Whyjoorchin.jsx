import React from "react";
import styles from "./Whyjoorchin.module.css"
import Comingsoon from "../components/Coming_Soon/Cooming_Soon";

const WhyJoorchin = () => {
    return(
        <>
        <div className={`container_fluid`}>
            <div className={`row`}>
                <div className={`col-12 ${styles.temp}`}>
                        <Comingsoon/>
                </div>
            </div>
        </div>
        
        </>
    )
}

export default WhyJoorchin;