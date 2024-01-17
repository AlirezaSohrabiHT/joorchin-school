import React from "react";
import styles from "./Teachers.module.css";
import Comingsoon from "../components/Coming_Soon/Cooming_Soon";

const Teachers = () =>{
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

export default Teachers;
