import React, { useEffect, useState } from 'react';
import getPosts from '../services/Get'
import background from '../assets/Background.svg'
import Button from '@mui/material/Button';
import styles from "./Home.module.css"
import hand from "../assets/Hand.svg"
import CourseCard from '../components/Course_Card/CourseCard';
import TeacherBox from '../components/Teacher_Box/Teacher_Box';
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
                    <img className={`${styles.main_animation}`} src={background}/>
                </div>
            </div>
        </div>
        <div className={`container-fluid`}>
            <div className={`row`}>
                <div className={`col-12 ${styles.main_text_container}`}>
                    <p className={`${styles.main_text}`}>مدرسه خلاقیت جورچین</p>
                    <p className={`${styles.main_text}`}>همه قفل ها را باز می کند برای خلاق بودن با هم یاد میگیریم.</p>
                </div>
            </div>
        </div>
        <div className={`container`}>
            <div className={`row`}>
                <div className={`col-12 ${styles.course_container}`}>
                    <p>جدیدترین دوره ها</p>
                    <Button variant="contained">مشاهده همه</Button>
                   
                </div>
            </div>
            <div className={`row`}>
                <div className={`col-12 ${styles.course_container}`}>
                    <CourseCard/>
                    <CourseCard/>
                    <CourseCard/>
                </div>
            </div>
            <div className={`row`}>
                <div className={`col-12 ${styles.teachers_container} `}>
                    <img src={hand}/>
                    <p>همکاران جورچین</p>
                    
                </div>
                <TeacherBox/>
            </div>
        </div>
        </>
    )
}

export default Home;