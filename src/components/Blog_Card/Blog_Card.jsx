import React from "react";
import styles from "./Blog_Card.module.css"
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import FolderIcon from '@mui/icons-material/Folder';
import Button from '@mui/material/Button';
import image from '../../assets/blog.svg'
const Blog_Card = () => {

    return(
        <>
        <div className={`${styles.container} ${styles.animatedContainer}`}>
            <div className={styles.container_right}>
                <img className={styles.blog_image} src={image}/>
                <h2 className={styles.blog_title}>scrum چیست؟</h2>
                <p className={styles.blog_name}>مهرداد نایب</p>
            </div>

        </div>
        </>
    )
}

export default Blog_Card;