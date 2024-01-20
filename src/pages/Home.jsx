import React, { useEffect, useState } from 'react';
import getPosts from '../services/Get'
import background from '../assets/Background.svg'
import Button from '@mui/material/Button';
import styles from "./Home.module.css";
import hand from "../assets/Hand.svg";
import certificate from '../assets/certificate 1.svg';
import CourseCard from '../components/Course_Card/CourseCard';
import TeacherBox from '../components/Teacher_Box/Teacher_Box';
import Blog_Card from '../components/Blog_Card/Blog_Card';
const Home = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
      const fetchData = async () => {
        try {
          const postsData = await getPosts();
          setPosts(postsData);
        } catch (error) {
          console.error('Error setting posts:', error.message);
        }
      };
  
      fetchData();
    }, []);
    return(
        <>
        <div className={`container-fluid`}>
            <div className={`row`}>
                <div className={`col-12 ${styles.animation_container}`}>
                    <img className={`${styles.main_animation}`} src={background}/>
                    <img className={`${styles.main_animation} `} src={background}/>
                </div>
            </div>
        </div>
        <div className={`container-fluid`}>
            <div className={`row`}>
                <div className={`col-12 ${styles.main_text_container}`}>
                    <p className={`${styles.main_text}`}>مدرسه خلاقیت جورچین</p>
                    <p className={`${styles.main_text} ${styles.main_text_white}`}>همه قفل ها را باز می کند برای خلاق بودن با هم یاد میگیریم.</p>
                </div>
            </div>
        </div>
        <div className={`container `}>
            <div className={`row`}> 
                <div className={`col-12 ${styles.course_container}`}>
                    <div className={styles.course_container_header}>
                    <p>جدیدترین دوره ها</p>
                    <Button variant="contained">مشاهده همه</Button>
                    </div>
                    <div className={styles.course_container_cards}>
                        <CourseCard/>
                        <CourseCard/>
                        <CourseCard/>
                    </div>
                </div>
            </div>
            <div className={`row`}>
                <div className={`col-12 ${styles.teachers_container} `}>
                    <img className={styles.hand} src={hand}/>
                    <p className={styles.teachers_container_title}>همکاران جورچین</p>
                </div>
                <div className={`container-fluid`}>
                <TeacherBox/>
                </div>

            </div>
            <div className={`row ${styles.certificate_container}`}>
                <div className={`col-md-6 col-12 `}>
                    <img className={styles.certificate} src={certificate}/>
                </div>
                <div className={`col-12 col-md-6 ${styles.certificate_text_container}`}>
                    <p className={styles.certificate_title}>ارائه مدرک بین المللی در پایان هر دوره</p>
                    <p className={styles.certificate_desciption}>مدرک بین‌ المللی  یک گواهینامه است که به شما نشان می‌ دهد که در زمینه مورد نظر تخصص و تجربه دارید. این مدرک توسط آکادمی جورچین  صادر می‌ شود که دوره‌ های آموزشی مربوطه را ارائه و پس از پاس کردن آزمون‌ های مربوطه، مدرک بین‌ المللی  به شما اعطا می‌ شود.</p>
                </div>
           
            </div>
            <div className={`container`}>
                <div className={`row ${styles.blog_container}`}>
                <div className={`col-md-12 col-12 ${styles.blog_text_container}`}>
                    <div>
                    <p className={styles.blog_title}>متن راجع به وبلاگ</p>
                    <p className={styles.blog_desciption}>متن متن متن متن متن راجع به وبلاگ</p>
                    </div>
                    <Button className={`${styles.blog_button}`} variant="contained">مشاهده همه بلاگ ها</Button>
                </div>
                </div>
                <div className={`row`}>
                <div className={`col-12 ${styles.course_container}`}>
                    <Blog_Card/>
                    <Blog_Card/>
                    <Blog_Card/>
                </div>
            </div>
            </div>
        </div>
        </>
    )
}

export default Home;