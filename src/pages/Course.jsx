import React from "react";
import Chratcter from "../assets/Course-character.svg"
import styles from "./Course.module.css"
import bambo from "../assets/bambo.svg"
import CourseCard from "../components/Course_Card/CourseCard";
const Course = () =>{
    return(
        <>
        <div className={`container mb-5`}>
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
                <div>
                </div>
            </div>
            </div>
            <div className={`container mb-5`}>
                <div className={`row`}>

                <div className={`col-12 ${styles.title_container}`}>
                    <div className={styles.title_container_text}>
                        <p>فتوشاپ</p>
                        <img src={bambo}/>
                    </div>
                    </div>
                    </div>
                    <div className={`row`}>
                     <div className={`col-2`}>
                    </div>
                    <div className={`col-10`}>
                    <div className={styles.course_container}>
                        <div className={styles.course_container_child}>
                            <CourseCard/>
                            <CourseCard/>
                        </div>
                        <div className={styles.course_container_child}>
                            <CourseCard/>
                            <CourseCard/>
                        </div>
                    </div>
                    </div>
                    </div>
                    </div>
                

                    <div className={`container mb-5`}>
                <div className={`row`}>

                <div className={`col-12 ${styles.title_container}`}>
                    <div className={styles.title_container_text}>
                        <p>تولید محتوا</p>
                        <img src={bambo}/>
                    </div>
                    </div>
                    </div>
                    <div className={`row`}>
                     <div className={`col-2`}>
                    </div>
                    <div className={`col-10`}>
                    <div className={styles.course_container}>
                        <div className={styles.course_container_child}>
                            <CourseCard/>
                            <CourseCard/>
                        </div>
                        <div className={styles.course_container_child}>
                            <CourseCard/>
                            <CourseCard/>
                        </div>
                    </div>
                    </div>
                    </div>
                    </div>


                    
                    <div className={`container mb-5`}>
                <div className={`row`}>

                <div className={`col-12 ${styles.title_container}`}>
                    <div className={styles.title_container_text}>
                        <p>برنامه نویسی</p>
                        <img src={bambo}/>
                    </div>
                    </div>
                    </div>
                    <div className={`row`}>
                     <div className={`col-2`}>
                    </div>
                    <div className={`col-10`}>
                    <div className={styles.course_container}>
                        <div className={styles.course_container_child}>
                            <CourseCard/>
                            <CourseCard/>
                        </div>
                        <div className={styles.course_container_child}>
                            <CourseCard/>
                            <CourseCard/>
                        </div>
                    </div>
                    </div>
                    </div>
                    </div>
                </div>
        </>
    )
} 

export default Course;