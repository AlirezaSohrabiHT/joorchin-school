import React from "react";
import styles from "./Blog_Card.module.css"
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import FolderIcon from '@mui/icons-material/Folder';
import Button from '@mui/material/Button';
import image from '../../assets/blog.svg';
import comment from '../../assets/iconamoon_comment-thin.svg';
import like from '../../assets/ph_heart.svg';
import author from '../../assets/1587508753153 1.svg';

const Blog_Card = () => {

    return(
        <>
        <div className={`${styles.container} ${styles.animatedContainer}`}>
            <div className={styles.container_right}>
                <img src={image} className={styles.blog_image}/>
                <h2 className={styles.blog_title}>Scrum چیست؟</h2>
            </div>
            <div className={styles.bottom_container}>
                <div className={styles.blog_discription_container}>
                    <div className={styles.author_container}>
                        <img src={author} alt="" />
                    <p className={styles.blog_name}>مهرداد نایب</p>
                    </div>
                    <div className={styles.blog_detail}>
                        <div className={styles.icon_container}>
                            <div>
                                <img src={comment} alt="Comment Icon" />
                                9
                            </div>
                            <div>
                                <img src={like} alt="Like Icon" />
                                12
                            </div>
                        </div>
                        <p>
                            زمان مطالعه: 10 دقیقه
                        </p>
                    </div>
                </div>
            </div>

        </div>
        </>
    )
}

export default Blog_Card;