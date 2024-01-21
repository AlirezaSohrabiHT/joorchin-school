import React from "react";
import styles from './SingleCourse.module.css';
import {AccessTimeOutlined, FolderOutlined, ExpandMore} from "@mui/icons-material";
import hand from '../assets/Group 89.svg';
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';
import expIcon from '../assets/Layer_1 (1).svg';

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
                        <div className={styles.course_details}>
                            <div>
                                <p className={styles.course_title}>معرفی دوره</p>
                                <p className={styles.course_des}>
                                مشخص شدن هویت بصری و ویژگی های ظاهری برند، از ابتدایی ترین موارد شروع هر کسب و کاری است. 
    در ابتدای ورود یک برند به دنیای کسب و کار، برای آن که بتواند خود را معرفی کند نیازمند هویتی شاخص است.
    این هویت به وسیله رنگها، نمادها، آوا ها و… تعریف می شوند.
    شما با مفاهیم بنیادین برند آشنا شده و اجزای ،« طراحی هویت بصری » در این دور ه یک هویت بصری کامل را درک می کنید. در این دوره، شما مبانی طراحی هویت بصری متناسب با یک برند بر اساس بریف و استراتژی را یاد میگیرید و با کارکرد و طراحی دیزاین سیستم به منظور یک دست کردن هویت یک برند آشنا می شوید
                                </p>
                            </div>
                            <div className={styles.course_layout}>
                                <div className={styles.course_layout_top}>
                                    <div>
                                        <p className={styles.course_title}>ملزومات دوره</p>
                                        <ul className={styles.course_des}>
                                            <li>کامپیوتر شخصی یا لپتاپ</li>
                                            <li>نرم افزار Adobe Illustrator</li>
                                            <li>نرم افزار Adobe Photoshop</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <p className={styles.course_title}>پیش نیاز دوره</p>
                                        <ul className={styles.course_des}>
                                            <li>تسلط به نرم افزار Adobe Illustrator</li>
                                            <li>تسلط نرم افزار Adobe Photoshop</li>
                                            <li>آشنایی با مبانی و  پیشبرد یک پروژه ی گرافیکیتجربه طراحی گرافیک</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div>
                                    <p className={styles.course_title}>مخاطبین دوره</p>
                                    <p className={styles.course_des}>این دوره برای علاقه مندان، هنرجویان هنرستان و دانشجویان رشته گرافیک، دیزاینرها و صاحبان کسب و کار و فعالان حوزه مارکتینگ مناسب است.</p>
                                </div>
                        </div>
                        <div className={styles.course_topic}>
                            <p className={styles.course_title}>سرفصل های دوره</p>
                            <div>
                                <Accordion className={styles.course_topic_accordion}
                                    sx={{
                                        background: 'transparent',
                                        mb: 2
                                    }}
                                >
                                    <AccordionSummary
                                    expandIcon={<img src={expIcon} />}
                                    aria-controls="panel1-content"
                                    id="panel1-header"
                                    >
                                        <p className={styles.course_topic_title}>فصل اول</p>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <p className={styles.course_topic_des}>توضیحات</p>
                                    </AccordionDetails>
                                </Accordion>
                                <Accordion className={styles.course_topic_accordion}
                                    sx={{
                                        background: 'transparent',
                                        mb: 2
                                    }}
                                >
                                    <AccordionSummary
                                    expandIcon={<img src={expIcon} />}
                                    aria-controls="panel1-content"
                                    id="panel1-header"
                                    >
                                        <p className={styles.course_topic_title}>فصل دوم</p>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <p className={styles.course_topic_des}>توضیحات</p>
                                    </AccordionDetails>
                                </Accordion>
                                <Accordion className={styles.course_topic_accordion}
                                    sx={{
                                        background: 'transparent',
                                        mb: 2
                                    }}
                                >
                                    <AccordionSummary
                                    expandIcon={<img src={expIcon} />}
                                    aria-controls="panel1-content"
                                    id="panel1-header"
                                    >
                                        <p className={styles.course_topic_title}>فصل سوم</p>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <p className={styles.course_topic_des}>توضیحات</p>
                                    </AccordionDetails>
                                </Accordion>
                                <Accordion className={styles.course_topic_accordion}
                                    sx={{
                                        background: 'transparent',
                                        mb: 2
                                    }}
                                >
                                    <AccordionSummary
                                    expandIcon={<img src={expIcon} />}
                                    aria-controls="panel1-content"
                                    id="panel1-header"
                                    >
                                        <p className={styles.course_topic_title}>فصل چهارم</p>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <p className={styles.course_topic_des}>توضیحات</p>
                                    </AccordionDetails>
                                </Accordion>
                                <Accordion className={styles.course_topic_accordion}
                                    sx={{
                                        background: 'transparent',
                                    }}
                                >
                                    <AccordionSummary
                                    expandIcon={<img src={expIcon} />}
                                    aria-controls="panel1-content"
                                    id="panel1-header"
                                    >
                                        <p className={styles.course_topic_title}>فصل پنجم</p>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <p className={styles.course_topic_des}>توضیحات</p>
                                    </AccordionDetails>
                                </Accordion>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SingleCourse;