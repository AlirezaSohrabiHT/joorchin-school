import React from "react";
import styles from './SingleCourse.module.css';
import {AccessTimeOutlined, FolderOutlined} from "@mui/icons-material";
import hand from '../assets/Group 89.svg';

const SingleCourse = () => {   
    return(
        <>
            <div className="container">
                <div className="row">
                    <div className={`col-12 ${styles.single_course_container}`}>
                        <div className={styles.course_info}>
                            <div className={styles.right_box}>
                                <h2 className={styles.title}>دوره طراحی هویت بصری</h2>
                                <p className={styles.course_name_eng}>visual identity design</p>
                                <p className={styles.course_badge}>سطح مقدماتی</p>
                            </div>
                            <div className={styles.left_box}>
                                <p className={styles.course_teacher}>مدرس: عطیه جلیلی</p>
                                <p className={styles.course_description}>در این دوره شما با مفاهیم بنیادین برند آشنا شده و اجزای یک هویت را بصری درک می‌کنید.</p>
                                <div className={styles.icons_group}>
                                    <div>
                                        <AccessTimeOutlined />
                                        6 ساعت
                                    </div>
                                    <div>
                                        <FolderOutlined />
                                        4 جلسه
                                    </div>
                                </div>
                                <div className={styles.course_registration}>
                                    <div className={styles.text_group}>
                                        <p>2,000,000 تومان</p>
                                        <a href="#">ثبت نام دوره</a>
                                    </div>
                                    <img src={hand} className={styles.hand_img} alt="Hand" />
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