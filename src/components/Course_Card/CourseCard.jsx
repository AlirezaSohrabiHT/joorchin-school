import React from "react";
import styles from "./CourseCard.module.css"
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import FolderIcon from '@mui/icons-material/Folder';
import Button from '@mui/material/Button';
import image from '../../assets/Cardtemp.png';
import divider from '../../assets/Vector 16.svg';
const CourseCard = () => {

    return(
        <>
        <div className={`${styles.container} ${styles.animatedContainer}`}>
            <div className={styles.container_right}>
                <img className={styles.course_image} src={image}/>
                <h2 className={styles.course_title}>دوره برنامه نویسی جنگو</h2>
                <p className={styles.course_discription}>در طول دوره آموزش جنگو (Django) ما سعی می‌کنیم این فریمورک محبوب و پر استفاده پایتونی را قدم به قدم به شکل کامل به شما آموزش دهیم.</p>
            </div>
            <div className={styles.container_left}>
                <div>
                    <p>مدرس : الناز زارع</p>
                    <p>سطح مقدماتی</p>
                    <div className={styles.icons_group}>
                        <div>
                            <AccessTimeIcon sx={{width: '14px'}} />
                            <span>6 ساعت</span>
                        </div>
                        <div>
                            <FolderIcon sx={{width: '14px'}} />
                            <span>4 جلسه</span>
                        </div>
                    </div>
                </div>
                <div className={styles.course_registration}>
                    <p>2.000.000 تومان</p>
                    <Button sx={{fontFamily: 'Kaghaz-bold', fontSize: '15px'}} className={styles.button}variant="contained">ثبت نام دوره</Button>
                </div>
            </div>
        </div>
        </>
    )
}

export default CourseCard;