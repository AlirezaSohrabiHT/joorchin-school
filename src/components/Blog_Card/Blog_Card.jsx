import React from "react";
import styles from "./Blog_Card.module.css"
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import FolderIcon from '@mui/icons-material/Folder';
import Button from '@mui/material/Button';
import tempcommnet from "../../assets/temp_comment.svg"
import templike from "../../assets/temp_like.svg"
import image from '../../assets/blog.svg'
const Blog_Card = () => {

    return(
        <>
        <div className={`${styles.container} ${styles.animatedContainer}`}>
            <div className={styles.container_right}>
                <img className={styles.blog_image} src={image}/>
                <h2 className={styles.blog_title}>scrum چیست؟</h2>
            </div>
            <div className={styles.bottom_container}>
                <div className={styles.blog_discription_container}>
                    <div>
                    <p className={styles.blog_name}>مهرداد نایب</p>
                    </div>
                    <div>
                        <div className={styles.icon_container}>
                            <img src={templike}/>
                            <img src={tempcommnet}/>
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