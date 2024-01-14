import React from "react";
import Chratcter from "../assets/Course-character.svg"
import styles from "./Course.module.css"
const Course = () =>{
    return(
        <>
        <div className={`container`}>
            <div className={`row`}>
            <div className={`col-12 ${styles.up_container}`}>
                <img src={Chratcter} />
                <div className={styles.text_container}>
                    <div className={`${styles.text_up}`}>
                        <p>دوره مورد علاقه خود را شروع کنید</p>
                    </div>
                    <p className={styles.text_down}>
                    مدرسه خلاقیت جورچین همه قفل ها را  باز می‌کند؛
                    برای خلاق بودن با هم یاد می‌گیریم!
                    </p>
                </div>
                <img/>
            </div>
            </div>
        </div>
        </>
    )
} 

export default Course;