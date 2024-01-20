import React from "react";
import styles from './SingleCourse.module.css';

const SingleCourse = () => {   
    return(
        <>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className={styles.course_info}>
                            <div className={styles.right_box}>
                                <h2 className={styles.title}>دوره طراحی هویت بصری</h2>
                                <p className={styles.course_name_eng}>visual identity design</p>
                                <p className={styles.course_badge}>سطح مقدماتی</p>
                            </div>
                            <div className={styles.left_box}>
                                <p>مدرس: عطیه جلیلی</p>
                                <p>در این دوره شما با مفاهیم بنیادین برند آشنا شده و اجزای یک هویت را بصری درک می‌کنید.</p>
                                <div className={styles.icons_group}>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SingleCourse;